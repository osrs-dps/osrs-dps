import React from 'react';
import _ from 'lodash';

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
        <div className='stats'>
            {monsterStatsIWannaShow.map(field => {
                const val = monster[field];
                return (
                    <div key={field}>
                        <div className='stat-left'>{field}</div>
                        <div className='stat-right'>{(_.isNil(val) || val === '') ? 'N/A' : val}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default MonsterPanel;
