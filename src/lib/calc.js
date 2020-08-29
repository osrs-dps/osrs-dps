import {
    SLOT_NAMES,
    DEFENCE_STYLE_MAP,
    ATTACK_STYLE_MAP,
} from './constants';
import BOOSTS from '../data/boosts';
import _ from 'lodash';

const TRIDENTS_BASE_DAMAGE = {
    'Trident of the seas': 20,
    'Trident of the swamp': 23,
    'Sanguinesti staff': 24,
};
const TRIDENTS = _.keys(TRIDENTS_BASE_DAMAGE);

function potionBuff(level, potion) {
    return potion.base + Math.floor(level * potion.multiplier);
}

function equipTotal(equips, field) {
    return _.reduce(SLOT_NAMES, (total, key) => {
        return total + (equips[key] ? parseInt(equips[key][field]) : 0);
    }, 0);
}

// https://web.archive.org/web/20190905124128/http://webcache.googleusercontent.com/search?q=cache:http://services.runescape.com/m=forum/forums.ws?317,318,712,65587452

function calc(stats, equips, monster) {
    if(!equips.attackStyle) {
        return {
            dps: 'N/A',
            maxHit: 'N/A',
            totalAttBonus: 'N/A',
            effectiveAtt: 'N/A',
            maxAttRoll: 'N/A',
            maxDefenceRoll: 'N/A',
            hitChance: 'N/A',
            totalStrBonus: 'N/A',
            effectiveStr: 'N/A',
            baseDamage: 'N/A',
        };
    }

    if(equips.attackStyle?.value?.type === 'Ranged'){

        const totalStrBonus = equipTotal(equips, 'range_str');

        const rangedPotion = _.find(BOOSTS.RANGED_POTIONS, { id: stats.rangedPotionId }) || { base: 0, multiplier: 0 };
        const rangedPrayer = _.find(BOOSTS.RANGED_PRAYERS, { id: stats.rangedPrayerId }) || { acc: 1, str: 1 };
        const rangedPotionBonus = potionBuff(stats.ranged, rangedPotion);

        const effectiveStr = Math.floor(((stats.ranged + rangedPotionBonus) * rangedPrayer.str * 1));
        const baseDamage = Math.floor( 1.3 + (effectiveStr/10) + (totalStrBonus/80) + ((effectiveStr*totalStrBonus)/640) );

        const specialBonus = 1;
        const maxHit = baseDamage * specialBonus;

        // ########## Attack Calcs ##########
        const styleAttBonus = {Accurate: 3}[equips.attackStyle?.value?.style] || 0;

        const totalAttBonus = _.reduce(SLOT_NAMES, (total, key) => {
            return total + (equips[key]? parseInt(equips[key]['range_att']) : 0);
        }, 0);

        const attPotionBonus = potionBuff(stats.ranged, rangedPotion);

        const effectiveAtt = Math.floor(((stats.ranged + attPotionBonus) * rangedPrayer.acc * 1) + styleAttBonus + 8);
        // todo: attack style, void, slayer helm, void

        const maxAttRoll = effectiveAtt * (totalAttBonus + 64) * 1;
        // salve, slayer, arclight, dchb, dhl, wildy weapons, tbow

        // ########## Enemy Defence Calcs ##########

        const effectiveDefence = monster.defence_level + 9;
        const monsterDefStyle = monster.ranged_def;
        const maxDefenceRoll = effectiveDefence * (monsterDefStyle + 64);

        // ########## DPS ##########

        let hitChance;

        if(maxAttRoll > maxDefenceRoll) {
            hitChance = 1 - (maxDefenceRoll + 2) / (2 * (maxAttRoll + 1));
        } else {
            hitChance = maxAttRoll / (2 * (maxDefenceRoll + 1));
        }

        // "attack speed" is (10 - weapon_tick_interval)
        // for example, whip = 4 tick interval, so the attack speed is (10-4) = 6
        const attackSpeed = (equips.attackStyle?.value?.style === 'Rapid') ? equips.weapon?.attack_speed + 1 || 6 :equips.weapon?.attack_speed || 6;
        const tickInterval = 10 - attackSpeed;
        const timeBetweenAttacks = tickInterval * 0.6;
        const dps = hitChance * (maxHit / 2) / timeBetweenAttacks;

        return {
            dps,
            maxHit,
            totalAttBonus,
            effectiveAtt,
            maxAttRoll,
            maxDefenceRoll,
            hitChance,
            totalStrBonus,
            effectiveStr,
            baseDamage,
        };
    }
    else if(equips.attackStyle?.value?.type === 'Magic'){
        const totalStrBonus = equipTotal(equips, 'magic_str');

        const magicPotion = _.find(BOOSTS.MAGIC_POTIONS, { id: stats.magicPotionId }) || { base: 0, multiplier: 0 };
        const magicPrayer = _.find(BOOSTS.MAGIC_PRAYERS, { id: stats.magicPrayerId }) || { multiplier: 1 };
        const magicPotionBonus = potionBuff(stats.magic, magicPotion);
        const visibleMagicLevel = stats.magic + magicPotionBonus;

        // ########## Strength Calcs ##########
        let baseDamage = 0;
        const weaponName = equips.weapon?.name;
        if (_.includes(TRIDENTS, weaponName)) {
            // tridents max hit scales only scales to 108 magic
            baseDamage = TRIDENTS_BASE_DAMAGE[weaponName] + ((Math.min(visibleMagicLevel, 108) - 75) / 3);
        } else {
            // other spells here
        }
        const maxHit = (1 + totalStrBonus) * baseDamage;

        // ########## Attack Calcs ##########
        const styleAttBonus = { Accurate: 3, Longrange: 1 }[equips.attackStyle?.value?.style] || 0;

        const totalAttBonus = equipTotal(equips, 'magic_att');

        const effectiveAtt = Math.floor((visibleMagicLevel * magicPrayer.multiplier * 1) + styleAttBonus + 8);

        const maxAttRoll = effectiveAtt * (totalAttBonus + 64) * 1;

        // ########## Enemy Defence Calcs ##########
        const effectiveDefence = monster.magic_level + 9; // npc defence is 100% magic level
        const monsterDefStyle = monster.magic_def;
        const maxDefenceRoll = effectiveDefence * (monsterDefStyle + 64);
        // ########## DPS ##########

        let hitChance;

        if (maxAttRoll > maxDefenceRoll) {
            hitChance = 1 - (maxDefenceRoll + 2) / (2 * (maxAttRoll + 1));
        } else {
            hitChance = maxAttRoll / (2 * (maxDefenceRoll + 1));
        }

        // "attack speed" is (10 - weapon_tick_interval)
        // for example, whip = 4 tick interval, so the attack speed is (10-4) = 6
        const attackSpeed = equips.weapon?.attack_speed || 6;
        const tickInterval = 10 - attackSpeed;
        const timeBetweenAttacks = tickInterval * 0.6;
        const dps = hitChance * (maxHit / 2) / timeBetweenAttacks;

        return {
            dps,
            maxHit,
            totalAttBonus,
            effectiveAtt,
            maxAttRoll,
            maxDefenceRoll,
            hitChance,
            totalStrBonus,
            effectiveStr: 'N/A',
            baseDamage,
        };
    }
    else{
        // ########## Strength Calcs ##########

        const styleStrBonus = {Aggressive: 3, Controlled: 1}[equips.attackStyle?.value?.style] || 0;
        const strPotion = _.find(BOOSTS.STR_POTIONS, {id: stats.strengthPotionId}) || {base: 0, multiplier: 0};
        const strPrayer = _.find(BOOSTS.STR_PRAYERS, {id: stats.strengthPrayerId}) || {multiplier: 1};

        const totalStrBonus = equipTotal(equips, 'str');

        // https://oldschool.runescape.wiki/w/Maximum_melee_hit

        const strPotionBonus = potionBuff(stats.strength, strPotion);

        const effectiveStr = Math.floor(((stats.strength + strPotionBonus) * strPrayer.multiplier * 1) + styleStrBonus);
        // Effective Strength = ((Strength Level + Potion Bonus) * Prayer Bonus * Other Bonus) + Style Bonus
        // todo: attack style, void, slayer helm, void

        const baseDamage = Math.floor( 1.3 + (effectiveStr/10) + (totalStrBonus/80) + ((effectiveStr*totalStrBonus)/640) );

        const specialBonus = 1;
        const maxHit = baseDamage * specialBonus;
        // todo: dharoks, obsidian, special attack bonuses

        // ########## Attack Calcs ##########
        const attStyleType = ATTACK_STYLE_MAP[equips.attackStyle?.value?.type];
        const styleAttBonus = {Accurate: 3, Controlled: 1}[equips.attackStyle?.value?.style] || 0;
        const attPotion = _.find(BOOSTS.ATT_POTIONS, {id: stats.attackPotionId}) || {base: 0, multiplier: 0};
        const attPrayer = _.find(BOOSTS.ATT_PRAYERS, {id: stats.attackPrayerId}) || {multiplier: 1};

        const totalAttBonus = _.reduce(SLOT_NAMES, (total, key) => {
            return total + ((equips[key] && attStyleType)? parseInt(equips[key][attStyleType]) : 0);
        }, 0);

        const attPotionBonus = potionBuff(stats.attack, attPotion);

        const effectiveAtt = Math.floor(((stats.attack + attPotionBonus) * attPrayer.multiplier * 1) + styleAttBonus + 8);
        // todo: attack style, void, slayer helm, void

        const maxAttRoll = effectiveAtt * (totalAttBonus + 64) * 1;
        // salve, slayer, arclight, dchb, dhl, wildy weapons, tbow

        // ########## Enemy Defence Calcs ##########
        const defStyleType = DEFENCE_STYLE_MAP[equips.attackStyle?.value?.type];
        const effectiveDefence = monster.defence_level + 9;
        const monsterDefStyle = defStyleType ? monster[defStyleType] : 0;
        const maxDefenceRoll = effectiveDefence * (monsterDefStyle + 64);

        // ########## DPS ##########

        let hitChance;

        if(maxAttRoll > maxDefenceRoll) {
            hitChance = 1 - (maxDefenceRoll + 2) / (2 * (maxAttRoll + 1));
        } else {
            hitChance = maxAttRoll / (2 * (maxDefenceRoll + 1));
        }

        // "attack speed" is (10 - weapon_tick_interval)
        // for example, whip = 4 tick interval, so the attack speed is (10-4) = 6
        const attackSpeed = equips.weapon?.attack_speed || 6;
        const tickInterval = 10 - attackSpeed;
        const timeBetweenAttacks = tickInterval * 0.6;
        const dps = hitChance * (maxHit / 2) / timeBetweenAttacks;

        return {
            dps,
            maxHit,
            totalAttBonus,
            effectiveAtt,
            maxAttRoll,
            maxDefenceRoll,
            hitChance,
            totalStrBonus,
            effectiveStr,
            baseDamage,
        };
    }
}

export default calc;
