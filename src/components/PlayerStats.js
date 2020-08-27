import React from 'react';
import {Row, Col, Form, InputGroup} from 'react-bootstrap';
import Select from 'react-select';
import BOOSTS from '../data/boosts';
import _ from 'lodash';

const boostOptions = data => data.map(boost => ({value: boost.id, label: boost.label}));

function IdSelect({value, options, onChange, ...rest}) {
    return (
        <Select
            options={boostOptions(options)}
            value={value && _.find(options, {id: value})}
            onChange={selected => onChange(selected?.value)}
            {...rest}
        />
    );
}

function StatRow({ title, stats, onStatChange, statKey, potions, prayers }) {
    return (
        <Row>
            <Col className='noPadding' lg='2'>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>{title}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type='number'
                        className='stat-input'
                        value={stats[statKey]}
                        onChange={e => onStatChange(parseInt(e.target.value), statKey)}
                    />
                </InputGroup>
            </Col>
            <Col lg='3'><IdSelect
                isClearable
                placeholder={`${title} Potion`}
                options={potions}
                onChange={id => onStatChange(id, `${statKey}PotionId`)}
            /></Col>
            <Col lg='3'><IdSelect
                isClearable
                placeholder={`${title} Prayer`}
                options={prayers}
                onChange={id => onStatChange(id, `${statKey}PrayerId`)}
            /></Col>
        </Row>
    );
}

function PlayerStats({stats, onStatChange}) {
    return (
        <div>
            <StatRow
                title='Attack'
                statKey='attack'
                prayers={BOOSTS.ATT_PRAYERS}
                potions={BOOSTS.ATT_POTIONS}
                stats={stats}
                onStatChange={onStatChange}
            />
            <StatRow
                title='Strength'
                statKey='strength'
                prayers={BOOSTS.STR_POTIONS}
                potions={BOOSTS.STR_PRAYERS}
                stats={stats}
                onStatChange={onStatChange}
            />
            <StatRow
                title='Magic'
                statKey='magic'
                prayers={BOOSTS.MAGIC_POTIONS}
                potions={BOOSTS.MAGIC_PRAYERS}
                stats={stats}
                onStatChange={onStatChange}
            />
            <StatRow
                title='Ranged'
                statKey='ranged'
                prayers={BOOSTS.RANGED_POTIONS}
                potions={BOOSTS.RANGED_PRAYERS}
                stats={stats}
                onStatChange={onStatChange}
            />
        </div>
    );

}

export default PlayerStats;
