import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';

const weaponSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];

const ammoSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];


const headSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];

const capeSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];

const amuletSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];

const chestSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];

const legsSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];

const shieldSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];

const glovesSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];

const bootsSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];

const ringSlotOptions = [
    {value: 'ancestralHat', label: 'Ancestral Hat'},
    {value: 'robinHoodHat', label: 'Robin Hood Hat'},
    {value: 'serpentineHelm', label: 'Serpentine Helm'},
];

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
