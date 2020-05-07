import React from 'react';

function MonsterPanel({monster}) {
    const monsterStatsIWannaShow = [
        'combat_level',
        'hitpoints',
        'defence_level',
        'magic_level',
        'stab_def',
        'slash_def',
        'crush_def',
        'magic_def',
        'ranged_def',
    ];

    return (
        <div className="stats">
            {monsterStatsIWannaShow.map(field => (
                <div key={field}>
                    <div className="stat-left">{field}</div>
                    <div className="stat-right">{monster[field]}</div>
                </div>
            ))}
        </div>
    )
}

export default MonsterPanel;
