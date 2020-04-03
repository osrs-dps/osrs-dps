import React, {useState} from 'react';
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

const weaponSlotOptions = parseJSONSelector(weaponSlot);
const ammoSlotOptions = parseJSONSelector(ammoSlot);
const headSlotOptions = parseJSONSelector(headSlot);
const capeSlotOptions = parseJSONSelector(capeSlot);
const amuletSlotOptions = parseJSONSelector(amuletSlot);
const chestSlotOptions = parseJSONSelector(chestSlot);
const legsSlotOptions = parseJSONSelector(legsSlot);
const shieldSlotOptions = parseJSONSelector(shieldSlot);
const glovesSlotOptions = parseJSONSelector(glovesSlot);
const bootsSlotOptions = parseJSONSelector(bootsSlot);
const ringSlotOptions = parseJSONSelector(ringSlot);

function parseJSONSelector(slot){
    var ret = []
    for(var i = 0 ; i < slot.length ; i++){
        ret[i] = {value: slot[i].Name, label: slot[i].Name}
    }
    return ret;
}

function App() {

  return (
    <div className="App">
        <div className="equipment-wrapper">
            <div className="margin-tb">
                <Select 
                    id="weapon" 
                    className="equipment-slot"
                    placeholder="Select Weapon..."
                    options={weaponSlotOptions}
                />
            </div>
            
            <div className="margin-tb">
                <Select 
                    id="ammo" 
                    className="equipment-slot"
                    placeholder="Select Ammo..."
                    options={ammoSlotOptions}
                />
            </div>

            <div className="margin-tb">
                <Select 
                    id="head" 
                    className="equipment-slot"
                    placeholder="Select Head..."
                    options={headSlotOptions}
                />
            </div>

            <div className="margin-tb">
                <Select 
                    id="cape" 
                    className="equipment-slot"
                    placeholder="Select Cape..."
                    options={capeSlotOptions}
                />
            </div>

            <div className="margin-tb">
                <Select 
                    id="amulet" 
                    className="equipment-slot"
                    placeholder="Select Amulet..."
                    options={amuletSlotOptions}
                />
            </div>

            <div className="margin-tb">
                <Select 
                    id="chest" 
                    className="equipment-slot"
                    placeholder="Select Chest..."
                    options={chestSlotOptions}
                />
            </div>

            <div className="margin-tb">
                <Select 
                    id="legs" 
                    className="equipment-slot"
                    placeholder="Select Legs..."
                    options={legsSlotOptions}
                />
            </div>

            <div className="margin-tb">
                <Select 
                    id="shield" 
                    className="equipment-slot"
                    placeholder="Select Shield..."
                    options={shieldSlotOptions}
                />
            </div>

            <div className="margin-tb">
                <Select 
                    id="gloves" 
                    className="equipment-slot"
                    placeholder="Select Gloves..."
                    options={glovesSlotOptions}
                />
            </div>

            <div className="margin-tb">
                <Select 
                    id="boots" 
                    className="equipment-slot"
                    placeholder="Select Boots..."
                    options={bootsSlotOptions}
                />
            </div>

            
            <div className="margin-tb">
                <Select 
                    id="ring" 
                    className="equipment-slot"
                    placeholder="Select Ring..."
                    options={ringSlotOptions}
                />
            </div>
        </div>

        <div className="stats-wrapper">
            <div calss="margin-tb">
                <label className="stat-label" for="rsn">RSN</label>
                <input className="stat-input" type="text" id="rsn"></input>
            </div>
            <div calss="margin-tb">
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
            <div calss="margin-tb">
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
            <div calss="margin-tb">
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
            <div calss="margin-tb">
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
            <div calss="margin-tb">
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
            <div calss="margin-tb">
                <label className="stat-label" for="hp">Hitpoints</label>
                <input className="stat-input" type="number" id="hp"></input>
            </div>
            <div calss="margin-tb">
                <label className="stat-label" for="prayer">Prayer</label>
                <input className="stat-input" type="number" id="prayer"></input>
            </div>
        </div>

        <div class="checkbox-wrapper">
            <div class="">
                <label class="checkbox-label" for="wild">Wilderness</label>
                <input class="checkbox" type="checkbox" id="wild"></input>
            </div>
            <div class="">
                <label class="checkbox-label" for="kandarin">Kandarin</label>
                <input class="checkbox" type="checkbox" id="kandarin"></input>
            </div>
            <div class="">
                <label class="checkbox-label" for="dwh">Dragon warhammer</label>
                <input class="checkbox" type="checkbox" id="dwh"></input>
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
