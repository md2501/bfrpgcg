import { Class } from "./class.interface";

export class Cleric implements Class {
    savingThrow = {
        poison: 11, wands: 12, paralysis: 14, dragonBreath: 16,
        spells: 15
    };
    abilityRequirements = { wisdom: 9 };
    hd = 6;
    ab = 1;
    weaponRestrictions = ["may wear any armor", "may only use blunt weapons (specifically including warhammer, mace, maul, club, quarterstaff, and sling)"];
    specialAbility="Turn the Undead";
}