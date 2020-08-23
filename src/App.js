import React, { useState } from 'react';
import './App.css';
import slotData from './slot_data';
import monsterData from './data/monsters.json';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import PlayerStats from './components/PlayerStats';
import ResultsPanel from './components/ResultsPanel';
import MonsterPanel from './components/MonsterPanel';
import GearSelector from './components/GearSelector';
import { useArrayState } from './lib/custom_hooks';
import { Button } from 'react-bootstrap';

import { SLOT_NAMES } from './lib/constants';

const DEFAULT_MONSTER = {
    name: null,
    location: null,
    exp_bonus: null,
    combat_level: 0,
    hitpoints: 0,
    attack_level: 0,
    defence_level: 0,
    strength_level: 0,
    magic_level: 0,
    ranged_level: 0,
    attack_style: null,
    attack_speed: 0,
    stab_attack: 0,
    slash_attack: 0,
    crush_attack: 0,
    magic_attack: 0,
    ranged_attack: 0,
    attack_bonus: 0,
    melee_strength: 0,
    ranged_strength: 0,
    stab_def: 0,
    slash_def: 0,
    crush_def: 0,
    magic_def: 0,
    ranged_def: 0,
    interval: null,
    type: null
};

const DEFAULT_STATS = {
    attack: 99,
    strength: 99,
    defence: 99,
    magic: 99,
    ranged: 99,
    hitpoints: 99,
    prayer: 99,

    attackPrayerId: null,
    attackPotionId: null,
    strengthPrayerId: null,
    strengthPotionId: null,
    rangedPrayerId: null,
    rangedPotionId: null,
};

const monsterOptions = parseJSONSelector(monsterData);

function parseJSONSelector(slot){
    var ret = [];
    for(var i = 0 ; i < slot.length ; i++){
        ret[i] = {value: slot[i].name, label: slot[i].name};
    }
    return ret;
}

const DEFAULT_EQUIPS = _.reduce(SLOT_NAMES, (acc, key) => {
    return {...acc, [key]: null};
}, {});

DEFAULT_EQUIPS.attackStyle = null;

function App() {

    const [equipSets, addEquipSet, removeEquipSet, editEquipSet] = useArrayState(DEFAULT_EQUIPS);
    const [stats, setStats] = useState(DEFAULT_STATS);
    const [monster, setMonster] = useState(DEFAULT_MONSTER);

    const onMonsterChange = (monsterId) => {
        let monster = DEFAULT_MONSTER;
        if(monsterId) {
            monster = _.find(monsterData, {name: monsterId.value});
        }
        setMonster(monster);
    };

    const onStatChange = (value, type) => {
        setStats({...stats, [type]: value});
    };

    return (

        <div className="App">
            <div className='row'>
                <div className='col-md-6'>
                    <Select
                        isClearable
                        placeholder='Select Enemy...'
                        options={monsterOptions}
                        value={monsterOptions && monsterOptions.name}
                        onChange={monsterId => onMonsterChange(monsterId)}
                    />
                    <MonsterPanel monster={monster} />
                </div>
                <div className='col-md-6'>
                    <PlayerStats stats={stats} onStatChange={onStatChange} />
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
                </div>
            </div>
            <div className='row'>
                <Button onClick={addEquipSet}>Add gear card</Button>
            </div>
            <div className='row'>
                {equipSets.map((equipSet, index) => (
                    <div className='gear-card' key={index}>
                        <GearSelector
                            equips={equipSet}
                            setEquips={equips => editEquipSet(index, equips)}
                            remove={() => removeEquipSet(index)} />
                        <ResultsPanel equips={equipSet} stats={stats} monster={monster} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
