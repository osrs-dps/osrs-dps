import React from 'react';
import calculateResults from '../lib/calc';


function ResultsPanel({stats, equips, monster}) {

    const calculations = calculateResults(stats, equips, monster);

    return (
        <div className="stats">
            <div>
                <div className="stat-left">
                    Damage Per Second
                </div>
                <div className="stat-right">
                    {parseFloat(calculations.dps.toFixed(6))}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Max hit
                </div>
                <div className="stat-right">
                    {calculations.maxHit}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Attack Bonus
                </div>
                <div className="stat-right">
                    {calculations.totalAttBonus}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Effective Attack
                </div>
                <div className="stat-right">
                    {calculations.effectiveAtt}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Max Attack Roll
                </div>
                <div className="stat-right">
                    {calculations.maxAttRoll}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Max Defence Roll
                </div>
                <div className="stat-right">
                    {calculations.maxDefenceRoll}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Accuracy
                </div>
                <div className="stat-right">
                    {parseFloat(calculations.hitChance.toFixed(6))}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Strength bonus
                </div>
                <div className="stat-right">
                    {calculations.totalStrBonus}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Effective Strength
                </div>
                <div className="stat-right">
                    {calculations.effectiveStr}
                </div>
            </div>
            <div>
                <div className="stat-left">
                    Base Damage
                </div>
                <div className="stat-right">
                    {calculations.baseDamage}
                </div>
            </div>
        </div>
    )
}

export default ResultsPanel;
