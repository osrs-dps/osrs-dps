import React, { useState } from 'react';
import './App.css';
import slotData from './slot_data';
import _ from 'lodash';

import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';

const SLOT_NAMES = [
    'weapon',
    'ammo',
    'head',
    'cape',
    'amulet',
    'chest',
    'legs',
    'shield',
    'gloves',
    'boots',
    'ring',
];



const STR_PRAYERS = [
    {value: 1.23, label: "Piety"},
    {value: 1.18, label: "Chivalry"},
    {value: 1.15, label: "Ultimate Strength"},
    {value: 1.11, label: "Superhuman Strength"},
    {value: 1.05, label: "Burst of Strength"},
];

const STR_POTIONS = [
    {value: "strengthPotion", label: "Strength Potion"},
    {value: "superStrengthPotion", label: "Super Strength Potion"},
    {value: "overload(+)", label: "Overload (+)"}
];

const slotOptions = _.reduce(SLOT_NAMES, (acc, key) => {
    return {...acc, [key]: parseJSONSelector(slotData[key])};
}, {});


function parseJSONSelector(slot){
    var ret = []
    for(var i = 0 ; i < slot.length ; i++){
        ret[i] = {value: slot[i].Name, label: slot[i].Name}
    }
    return ret;
}

function App() {

    const [equips, setEquips] = useState(_.reduce(SLOT_NAMES, (acc, key) => {
        return {...acc, [key]: null};
    }, {}));

    const onEquipChange = (selected, type) => {
        let item = null;
        if(selected) {
            item = _.find(slotData[type], {Name: selected.value});
        }
        setEquips({...equips, [`${type}`]: item});
    };

    const totalStrBonus = _.reduce(SLOT_NAMES, (total, key) => {
        return total + (equips[key] ? parseInt(equips[key].str) : 0);
    }, 0);

    const onLevelChange = (level, type) => {
        setLevels({...levels, [`${type}`]: level})
    };



    const onStrPotionChange = (potion) => {
        let base = 0;
        let multiplier = 0;
        if(potion === "strengthPotion"){
            base = 3;
            multiplier = 0.1;
        }
        else if(potion === "superStrengthPotion"){
            base = 5;
            multiplier = 0.15;        
        }
        else if(potion === "overload(+)"){
            base = 6;
            multiplier = 0.16;
        }
        setStrBonuses({...strBonuses, [`potionBase`]: base, [`potionMultiplier`]: multiplier});
    };

    const [levels, setLevels] = useState({
        attack: 1,
        strength: 1,
        defence: 1,
        magic: 1,
        ranged: 1,
        hitpoints: 10,
        prayer: 1
    });

    const [strBonuses, setStrBonuses] = useState({
        potionBase: 0,
        potionMultiplier: 0,
        prayer: 1,
        other: 1,
        style: 0
    })

    //https://oldschool.runescape.wiki/w/Maximum_melee_hit
    const strPotionBonus = strBonuses.potionBase + Math.floor(levels.strength*strBonuses.potionMultiplier);

    const effectiveStr = Math.floor(((levels.strength + strPotionBonus) * strBonuses.prayer * 1) + 0);
    //Effective Strength = ((Strength Level + Potion Bonus) * Prayer Bonus * Other Bonus) + Style Bonus
    //todo: attack style, void, slayer helm, void

    const baseDamage = Math.floor(1.3 + effectiveStr/10 + totalStrBonus/80 + (effectiveStr*totalStrBonus)/640);

    const maxHit = baseDamage * 1;
    //todo: dharoks, obsidian, special attack bonuses
    
  return (
    <div className="App">
        <div className="equipment-wrapper">
            {SLOT_NAMES.map(type => (
                <div key={type} className="margin-tb">
                    <Select
                        isClearable
                        className="equipment-slot"
                        placeholder={`Select ${type}...`}
                        options={slotOptions[type]}
                        value={equips[type] && {value: equips[type].Name, label: equips[type].Name}}
                        onChange={itemId => onEquipChange(itemId, type)}
                    />
                </div>
            ))}
        </div>

        <div className="stats-wrapper">
            <div className="margin-tb">
                <label className="stat-label" htmlFor="rsn">RSN</label>
                <input className="stat-input" type="text" id="rsn"></input>
            </div>
            <div className="margin-tb">
                <label className="stat-label" htmlFor="att">Attack</label>
                <input className="stat-input" type="number" id="attack"></input>
                <Select
                    isClearable
                    className="stat-input"
                    placeholder={`Potion`}
                    />
                <Select
                    isClearable
                    className="stat-input"
                    placeholder={`Prayer`}
                />
            </div>
            <div className="margin-tb">
                <label className="stat-label" htmlFor="str">Strength</label>
                <input className="stat-input" 
                    type="number" 
                    id="str"
                    value={levels.strength}
                    onChange={level => onLevelChange(parseInt(level.target.value), "strength")}></input>
                <Select
                    isClearable
                    className="stat-input"
                    placeholder={`Potion`}
                    options={STR_POTIONS}
                    onChange={potion => onStrPotionChange(potion && potion.value)}
                />
                <Select
                    isClearable
                    className="stat-input"
                    placeholder={`Prayer`}
                    options={STR_PRAYERS}
                    onChange={prayer => setStrBonuses({...strBonuses, [`prayer`]:prayer ? prayer.value : 1})}
                />
            </div>
            <div className="margin-tb">
                <label className="stat-label" htmlFor="magic">Magic</label>
                <input className="stat-input" type="number" id="magic"></input>
                <select id="att-pot" className="stat-input">
                    <option value="">Potion</option>
                    <option value="">hat</option>
                </select>
                <select id="att-pot" className="stat-input">
                    <option value="">Prayer</option>
                    <option value="">hat</option>
                </select>
            </div>
            <div className="margin-tb">
                <label className="stat-label" htmlFor="range">Ranged</label>
                <input className="stat-input" type="number" id="range"></input>
                <select id="att-pot" className="stat-input">
                    <option value="">Potion</option>
                    <option value="">hat</option>
                </select>
                <select id="att-pot" className="stat-input">
                    <option value="">Prayer</option>
                    <option value="">hat</option>
                </select>
            </div>
        </div>

        <div className="checkbox-wrapper">
            <div className="">
                <label className="checkbox-label" htmlFor="wild">Wilderness</label>
                <input className="checkbox" type="checkbox" id="wild"></input>
            </div>
            <div className="">
                <label className="checkbox-label" htmlFor="kandarin">Kandarin</label>
                <input className="checkbox" type="checkbox" id="kandarin"></input>
            </div>
            <div className="">
                <label className="checkbox-label" htmlFor="dwh">Dragon warhammer</label>
                <input className="checkbox" type="checkbox" id="dwh"></input>
            </div>
        </div>

        <div className="stats">
            <div>
                <div className="stat-left">
                    Max hit
                </div>
                <div className="stat-right">
                    {maxHit}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Spec max hit
                </div>
                <div className="stat-right">
                    69420
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Spec accuracy
                </div>
                <div className="stat-right">
                    420%
                </div>
            </div>
            <div>
                <div className="stat-left">
                    accuracy
                </div>
                <div className="stat-right">
                    69%
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Strength bonus
                </div>
                <div className="stat-right">
                    {totalStrBonus}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Effective Strength
                </div>
                <div className="stat-right">
                    {effectiveStr}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Base Damage
                </div>
                <div className="stat-right">
                    {baseDamage}
                </div>
            </div>
            <div>
                <div className="stat-left stat-bottom">
                    Accuracy bonus
                </div>
                <div className="stat-right stat-bottom">
                    6
                </div>
            </div>
        </div>

        <div className="monster-wrapper">
            <select id="att-pot" className="">
                <option value="">Monster</option>
                <option value="">hat</option>
            </select>
        </div>
    </div>
  );
}

export default App;
