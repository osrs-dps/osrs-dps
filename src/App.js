import React, { useState } from 'react';
import './App.css';
import slotData from './slot_data';
import monsterData from './data/monsters.json';
import allAttackStyles from "./data/attack_styles.json";
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import PlayerStats from './components/PlayerStats';
import ResultsPanel from './components/ResultsPanel';
import MonsterPanel from './components/MonsterPanel';

import {
    SLOT_NAMES,
    ATTACK_STYLE_MAP,
    STRENGTH_STYLE_MAP,
} from './lib/constants';

const slotOptions = _.reduce(SLOT_NAMES, (acc, key) => {
    return {...acc, [key]: parseJSONSelector(slotData[key])};
}, {});


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
    var ret = []
    for(var i = 0 ; i < slot.length ; i++){
        ret[i] = {value: slot[i].name, label: slot[i].name}
    }
    return ret;
}

const DEFAULT_EQUIPS = _.reduce(SLOT_NAMES, (acc, key) => {
    return {...acc, [key]: null};
}, {});

DEFAULT_EQUIPS.attackStyle = null;

function getAttackStylesFromWeapon(weapon) {
    if(!weapon) {
        return [];
    }
    return _.find(allAttackStyles, {id: weapon.attack_style_id})?.styles || [];
}

function renderSlotSelector(type, options, equips, onEquipChange) {
    const styleType = equips.attackStyle?.value?.type;
    const attBonusField = ATTACK_STYLE_MAP[styleType];
    const strBonusField = STRENGTH_STYLE_MAP[styleType];
    return (
        <div key={type} className="margin-tb">
            <img src={`/images/${type}_slot.png`} alt={`${type} slot`} />
            <Select
                isClearable
                isDisabled={type==="shield" && equips.weapon?.two_handed}
                className="equipment-slot"
                placeholder={`Select ${type}...`}
                options={options}
                value={equips[type] && {value: equips[type].name, label: equips[type].name}}
                onChange={itemId => onEquipChange(itemId, type)}
            />
            {styleType && <span>{'        '}str: {equips[type] && equips[type][strBonusField]} - att: {equips[type] && equips[type][attBonusField]}</span>}
        </div>
    );
}

function App() {

    const [equips, setEquips] = useState(DEFAULT_EQUIPS);
    const [stats, setStats] = useState(DEFAULT_STATS);
    const [monster, setMonster] = useState(DEFAULT_MONSTER)

    const onMonsterChange = (monsterId) => {
        let monster = DEFAULT_MONSTER;
        if(monsterId) {
            monster = _.find(monsterData, {name: monsterId.value});
        }
        setMonster(monster);
    };

    const onEquipChange = (selected, type) => {
        let item = null;
        if(selected) {
            item = _.find(slotData[type], {name: selected.value});
        }
        let changeset = {...equips, [type]: item};

        if(type === 'weapon') {
            if(item?.two_handed) {
                changeset.shield = null;
            }
            if(equips.weapon?.attack_style_id !== item?.attack_style_id) {
                changeset.attackStyle = null
            }
        }
        setEquips(changeset);
    };

    const onStatChange = (value, type) => {
        setStats({...stats, [type]: value});
    };

    let availableAttackStyles = getAttackStylesFromWeapon(equips.weapon);

    return (

        <div className="App">
            <div className='row'>
                <div className='col-md-4'>
                    {renderSlotSelector('weapon', slotOptions.weapon, equips, onEquipChange)}
                    <div className="margin-tb">
                        <Select
                            isClearable
                            className="equipment-slot"
                            placeholder={`Select Attack Style...`}
                            options={availableAttackStyles}
                            value={equips.attackStyle}
                            onChange={style => setEquips({...equips, attackStyle: style})}
                        />
                    </div>
                    {_.without(SLOT_NAMES, 'weapon').map(type => renderSlotSelector(type, slotOptions[type], equips, onEquipChange))}
                </div>
                <div className='col-md-6'>
                    <ResultsPanel equips={equips} stats={stats} monster={monster} />
                    <Select
                        isClearable
                        className="equipment-slot margin-tb"
                        placeholder={`Select Enemy...`}
                        options={monsterOptions}
                        value={monsterOptions && monsterOptions.name}
                        onChange={monsterId => onMonsterChange(monsterId)}
                    />
                    <MonsterPanel monster={monster} />
                    <PlayerStats stats={stats} onStatChange={onStatChange} />
                </div>
                <div className='col-md-3'>
                    &nbsp;
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
        </div>
    );
}

export default App;
