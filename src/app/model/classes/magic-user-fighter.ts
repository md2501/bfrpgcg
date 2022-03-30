import IClass from "./iclass.interface";

export class MagicUserFighter implements IClass {
    hd = 6;
    ab = 1;
    abilityRequirements = { strength: 9, intelligence: 9 };
    weaponRestrictions = []
    savingThrow = { poison: 13, wands: 14, paralysis: 15, dragonBreath: 16, spells: 18 };
    specialAbility = "read magic";
}