import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
        <div className="equipment-wrapper">
            <div className="margin-tb">
                <select id="helmet" className="equipment-slot">
                    <option value="">Helmet</option>
                    <option value="">hat</option>
                </select>
            </div>

            <div className="margin-tb">
                <select id="ammo" className="equipment-slot">
                    <option value="">Ammo/Blessing</option>
                    <option value="">hat</option>
                </select>
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
