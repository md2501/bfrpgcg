import IClass from "./iclass.interface";

export class Fighter implements IClass {
    savingThrow= { poison: 13, wands: 14, paralysis: 15, dragonBreath: 16, spells: 18, };
    hd = 8;
    ab = 1;
    abilityRequirements = { strength: 9 };
    weaponRestrictions = []
}