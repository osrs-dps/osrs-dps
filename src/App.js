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
                <label className="stat-label" htmlFor="str">Strength</label>
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
                <label className="stat-label" htmlFor="def">Defence</label>
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
            <div className="margin-tb">
                <label className="stat-label" htmlFor="hp">Hitpoints</label>
                <input className="stat-input" type="number" id="hp"></input>
            </div>
            <div className="margin-tb">
                <label className="stat-label" htmlFor="prayer">Prayer</label>
                <input className="stat-input" type="number" id="prayer"></input>
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
                    {totalStrBonus}
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
