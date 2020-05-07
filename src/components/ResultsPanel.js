import React from 'react';
import calculateResults from '../lib/calc';

function ResultsPanel({stats, equips, monster}) {

    const calculations = calculateResults(stats, equips, monster);

    const rows = [
        {label: 'Damage Per Second', field: 'dps', round: true},
        {label: 'Max hit', field: 'maxHit'},
        {label: 'Attack Bonus', field: 'totalAttBonus'},
        {label: 'Effective Attack', field: 'effectiveAtt'},
        {label: 'Max Attack Roll', field: 'maxAttRoll'},
        {label: 'Max Defence Roll', field: 'maxDefenceRoll'},
        {label: 'Accuracy', field: 'hitChance', round: true},
        {label: 'Strength bonus', field: 'totalStrBonus'},
        {label: 'Effective Strength', field: 'effectiveStr'},
        {label: 'Base Damage', field: 'baseDamage'},
    ];

    return (
        <div className="stats">
            {rows.map(row => {
                let stat = calculations[row.field];
                if(row.round && stat.toFixed) {
                    stat = stat.toFixed(6);
                }
                return (
                    <div key={row.label}>
                        <div className="stat-left">{row.label}</div>
                        <div className="stat-right">{stat}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default ResultsPanel;
