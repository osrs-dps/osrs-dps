const DEFENCE_STYLE_MAP = {
    Stab: "stab_def",
    Slash: "slash_def",
    Crush: "crush_def",
    Magic: "magic_def",
    Ranged: "range_def"
};

const ATTACK_STYLE_MAP = {
    Stab: "stab_att",
    Slash: "slash_att",
    Crush: "crush_att",
    Magic: "magic_att",
    Ranged: "range_att"
};

function calc(stats, equips, monster) {
    return {
        dps: 5.4434543263,
        maxHit: 29,
        totalAttBonus: 140,
        effectiveAtt: 154,
        maxAttRoll: 1812,
        maxDefenceRoll: 1243,
        hitChance: 12312,
        totalStrBonus: 98,
        effectiveStr: 87123,
        baseDamage: 23,
    };
}

/*

if(styleObj.value.style === "Agressive"){
    strBonus = 3;
}
else if(styleObj.value.style === "Accurate"){
    attBonus = 3;
}
else if(styleObj.value.style === "Controlled"){
    attBonus = 1;
    strBonus = 1;
}

//########## Strength Calcs ##########
const totalStrBonus = _.reduce(SLOT_NAMES, (total, key) => {
    return total + (equips[key] ? parseInt(equips[key].str) : 0);
}, 0);

//https://oldschool.runescape.wiki/w/Maximum_melee_hit
const strPotionBonus = strBonuses.potionBase + Math.floor(stats.strength*strBonuses.potionMultiplier);

const effectiveStr = Math.floor(((stats.strength + strPotionBonus) * strBonuses.prayer * 1) + strBonuses.style);
//Effective Strength = ((Strength Level + Potion Bonus) * Prayer Bonus * Other Bonus) + Style Bonus
//todo: attack style, void, slayer helm, void

const baseDamage = Math.floor(1.3 + effectiveStr/10 + totalStrBonus/80 + (effectiveStr*totalStrBonus)/640);

const maxHit = baseDamage * 1;
//todo: dharoks, obsidian, special attack bonuses

//########## Attack Calcs ##########
const totalAttBonus = _.reduce(SLOT_NAMES, (total, key) => {
    return total + ((equips[key] && attStyle.attAccStyle)? parseInt(equips[key][attStyle.attAccStyle]) : 0);
}, 0);
//change slash_att for other styles

const [attBonuses, setAttBonuses] = useState({
    potionBase: 0,
    potionMultiplier: 0,
    prayer: 1,
    style: 0
});

const attPotionBonus = attBonuses.potionBase + Math.floor(stats.attack*attBonuses.potionMultiplier);

const effectiveAtt = Math.floor(((stats.attack + attPotionBonus) * attBonuses.prayer * 1) + attBonuses.style + 8);
//todo: attack style, void, slayer helm, void

const maxAttRoll = effectiveAtt * (totalAttBonus + 64) * 1;
//salve, slayer, arclight, dchb, dhl, wildy weapons, tbow

//########## Enemy Defence Calcs ##########

const effectiveDefence = monster.defence_level + 9;

const monsterDefStyle = attStyle.style ? monster[attStyle.attDefStyle] : 0;

const maxDefenceRoll = effectiveDefence * (monsterDefStyle + 64);

const hitChance = maxAttRoll > maxDefenceRoll ? 1 - (maxDefenceRoll + 2) / (2 * (maxAttRoll + 1)):
maxAttRoll / (2 * (maxDefenceRoll + 1));

const dps = hitChance * (maxHit / 2) / (6 - (equips.weapon?equips.weapon.attack_speed:5) * 0.6);

*/

export default calc;
