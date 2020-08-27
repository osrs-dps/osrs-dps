import React from 'react';
import _ from 'lodash';
import slotData from '../slot_data';
import Select from 'react-select';
import allAttackStyles from '../data/attack_styles.json';
import { Button } from 'react-bootstrap';

import {
  SLOT_NAMES,
  ATTACK_STYLE_MAP,
  STRENGTH_STYLE_MAP,
} from '../lib/constants';

function getAttackStylesFromWeapon(weapon) {
  if (!weapon) {
    return [];
  }
  return _.find(allAttackStyles, { id: weapon.attack_style_id })?.styles || [];
}

function parseJSONSelector(slot) {
  var ret = [];
  for (var i = 0; i < slot.length; i++) {
    ret[i] = { value: slot[i].name, label: slot[i].name };
  }
  return ret;
}

const slotOptions = _.reduce(SLOT_NAMES, (acc, key) => {
  return { ...acc, [key]: parseJSONSelector(slotData[key]) };
}, {});

function renderSlotSelector(type, equips, onEquipChange) {
  const styleType = equips.attackStyle?.value?.type;
  const attBonusField = ATTACK_STYLE_MAP[styleType];
  const strBonusField = STRENGTH_STYLE_MAP[styleType];

  return (
    <div key={type} className='equipment-row'>
      <img src={`/images/${type}_slot.png`} alt={`${type} slot`} />
      <Select
        isClearable
        isDisabled={type === 'shield' && equips.weapon?.two_handed}
        className='equipment-slot'
        placeholder={`Select ${type}...`}
        options={slotOptions[type]}
        value={equips[type] && { value: equips[type].name, label: equips[type].name }}
        onChange={itemId => onEquipChange(itemId, type)}
      />
      {styleType && <span>{'        '}str: {equips[type] && equips[type][strBonusField]} - att: {equips[type] && equips[type][attBonusField]}</span>}
    </div>
  );
}

export default function ({ equips, setEquips, remove }) {
  const availableAttackStyles = getAttackStylesFromWeapon(equips.weapon);

  const onEquipChange = (selected, type) => {
    let item = null;
    if (selected) {
      item = _.find(slotData[type], { name: selected.value });
    }
    const changeset = { ...equips, [type]: item };

    if (type === 'weapon') {
      if (item?.two_handed) {
        changeset.shield = null;
      }
      if (equips.weapon?.attack_style_id !== item?.attack_style_id) {
        changeset.attackStyle = null;
      }
    }
    setEquips(changeset);
  };

  return (
    <div>
      <Button variant='danger' onClick={remove}>remove this card</Button>
      {renderSlotSelector('weapon', equips, onEquipChange)}
      <div className='equipment-row'>
        <img src='/images/attack_styles.png' alt='attack style' />
        <Select
          isClearable
          className='equipment-slot'
          placeholder={'Select attack style...'}
          options={availableAttackStyles}
          value={equips.attackStyle}
          onChange={style => setEquips({ ...equips, attackStyle: style })}
        />
      </div>
      {_.without(SLOT_NAMES, 'weapon').map(type => renderSlotSelector(type, equips, onEquipChange))}
    </div>
  );
};
