import React from 'react';
import {Container, Row, Col, Form, InputGroup} from 'react-bootstrap';
import Select from 'react-select';
import BOOSTS from '../data/boosts';
import _ from 'lodash';

const boostOptions = data => data.map(boost => ({value: boost.id, label: boost.label}));

function IdSelect({value, options, onChange, ...rest}) {
    return (
        <Select
            options={boostOptions(options)}
            value={value && _.find(options, {id: value})}
            onChange={selected => onChange(selected?.id)}
            {...rest}
        />
    );
}

function PlayerStats({stats, onStatChange}) {
    return (
        <div className="stats-wrapper">
            <div className="margin-tb">
                <Container>
                    <Row>
                        <Col className="noPadding" lg="2">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon3">
                                        Attack
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    class="stat-input"
                                    id="attack"
                                    value={stats.attack}
                                    onChange={e => onStatChange(parseInt(e.target.value), 'attack')}
                                />
                            </InputGroup>
                        </Col>
                        <Col lg="3"><IdSelect
                            isClearable
                            placeholder='Attack Potion'
                            options={BOOSTS.ATT_POTIONS}
                            onChange={id => onStatChange(id, 'attackPotionId')}
                        /></Col>
                        <Col lg="3"><IdSelect
                            isClearable
                            placeholder='Attack Prayer'
                            options={BOOSTS.ATT_PRAYERS}
                            onChange={id => onStatChange(id, 'attackPrayerId')}
                        /></Col>
                    </Row>
                </Container>
            </div>
            <div className="margin-tb">
                <Container>
                    <Row>
                        <Col className="noPadding" lg="2">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon3">
                                        Strength
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control className="stat-input"
                                    type="number"
                                    id="str"
                                    value={stats.strength}
                                    onChange={e => onStatChange(parseInt(e.target.value), 'strength')}
                                />
                            </InputGroup>
                        </Col>
                        <Col lg="3"><IdSelect
                            isClearable
                            placeholder='Strength Potion'
                            options={BOOSTS.STR_POTIONS}
                            onChange={id => onStatChange(id, 'strengthPotionId')}
                        /></Col>
                        <Col lg="3"><IdSelect
                            isClearable
                            placeholder='Strength Prayer'
                            options={BOOSTS.STR_PRAYERS}
                            onChange={id => onStatChange(id, 'strengthPrayerId')}
                        /></Col>
                    </Row>
                </Container>
            </div>
            <div className="margin-tb">
                <Container>
                    <Row>
                        <Col className="noPadding" lg="2">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon3">
                                        Magic
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    className="stat-input"
                                    type="number"
                                    id="magic"
                                    value={stats.magic}
                                    onChange={e => onStatChange(parseInt(e.target.value), 'magic')}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="margin-tb">
                <Container>
                    <Row>
                        <Col className="noPadding" lg="2">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon3">
                                        Ranged
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    className="stat-input"
                                    type="number"
                                    id="ranged"
                                    value={stats.ranged}
                                    onChange={e => onStatChange(parseInt(e.target.value), 'ranged')}
                                />
                            </InputGroup>
                        </Col>
                        <Col lg="3"><IdSelect
                            isClearable
                            options={BOOSTS.RANGED_POTIONS}
                            placeholder='Ranged Potion'
                            onChange={id => onStatChange(id, 'rangedPotionId')}
                        /></Col>
                        <Col lg="3"><IdSelect
                            isClearable
                            options={BOOSTS.RANGED_PRAYERS}
                            placeholder='Ranged Prayer'
                            onChange={id => onStatChange(id, 'rangedPrayerId')}
                        /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );

}










export default PlayerStats;
