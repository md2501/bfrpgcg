export interface Class {
    hd: number;
    ab: number;
    abilityRequirements: { [ability: string]: number };
    weaponRestrictions: string[];
    savingThrow: { poison: number, wands: number, paralysis: number, dragonBreath: number, spells: number };
    specialAbility?: any;
}