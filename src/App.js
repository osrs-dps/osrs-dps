import React, { useState } from 'react';
import './App.css';
import weaponSlot from './data/1h_weapon_slot.json'
import ammoSlot from './data/ammo_blessing.json'
import headSlot from './data/head_slot.json'
import capeSlot from './data/cape_slot.json'
import amuletSlot from './data/neck_slot.json'
import chestSlot from './data/chest_slot.json'
import legsSlot from './data/leg_slot.json'
import shieldSlot from './data/shield_slot.json'
import glovesSlot from './data/hand_slot.json'
import bootsSlot from './data/boot_slot.json'
import ringSlot from './data/ring_slot.json'

import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';

const slotOptions = {
    weapon: parseJSONSelector(weaponSlot),
    ammo: parseJSONSelector(ammoSlot),
    head: parseJSONSelector(headSlot),
    cape: parseJSONSelector(capeSlot),
    amulet: parseJSONSelector(amuletSlot),
    chest: parseJSONSelector(chestSlot),
    legs: parseJSONSelector(legsSlot),
    shield: parseJSONSelector(shieldSlot),
    gloves: parseJSONSelector(glovesSlot),
    boots: parseJSONSelector(bootsSlot),
    ring: parseJSONSelector(ringSlot),
};


function parseJSONSelector(slot){
    var ret = []
    for(var i = 0 ; i < slot.length ; i++){
        ret[i] = {value: slot[i].Name, label: slot[i].Name}
    }
    return ret;
}

function App() {
    const [equips, setEquips] = useState({
        weapon: null,
        ammo: null,
        head: null,
        cape: null,
        amulet: null,
        chest: null,
        legs: null,
        shield: null,
        gloves: null,
        boots: null,
        ring: null,
    });

    const onEquipChange = (itemId, type) => {
        setEquips({...equips, [`${type}`]: itemId});
    };

  return (
    <div className="App">
        <div className="equipment-wrapper">
            {Object.keys(slotOptions).map(type => (
                <div key={type} className="margin-tb">
                    <Select
                        isClearable
                        className="equipment-slot"
                        placeholder={`Select ${type}...`}
                        options={slotOptions[type]}
                        value={equips[type]}
                        onChange={itemId => onEquipChange(itemId, type)}
                    />
                </div>
            ))}
        </div>

        <div className="stats-wrapper">
            <div className="margin-tb">
                <label className="stat-label" for="rsn">RSN</label>
                <input className="stat-input" type="text" id="rsn"></input>
            </div>
            <div className="margin-tb">
                <label className="stat-label" for="att">Attack</label>
                <input className="stat-input" type="number" id="attack"></input>
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
                <label className="stat-label" for="str">Strength</label>
                <input className="stat-input" type="number" id="str"></input>
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
                <label className="stat-label" for="def">Defence</label>
                <input className="stat-input" type="number" id="def"></input>
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
                <label className="stat-label" for="magic">Magic</label>
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
                <label className="stat-label" for="range">Ranged</label>
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
            <div className="margin-tb">
                <label className="stat-label" for="hp">Hitpoints</label>
                <input className="stat-input" type="number" id="hp"></input>
            </div>
            <div className="margin-tb">
                <label className="stat-label" for="prayer">Prayer</label>
                <input className="stat-input" type="number" id="prayer"></input>
            </div>
        </div>

        <div className="checkbox-wrapper">
            <div className="">
                <label className="checkbox-label" for="wild">Wilderness</label>
                <input className="checkbox" type="checkbox" id="wild"></input>
            </div>
            <div className="">
                <label className="checkbox-label" for="kandarin">Kandarin</label>
                <input className="checkbox" type="checkbox" id="kandarin"></input>
            </div>
            <div className="">
                <label className="checkbox-label" for="dwh">Dragon warhammer</label>
                <input className="checkbox" type="checkbox" id="dwh"></input>
            </div>
        </div>

        <div className="stats">
            <div>
                <div className="stat-left">
                    Max hit
                </div>
                <div className="stat-right">
                    1000
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
                    17 million
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
