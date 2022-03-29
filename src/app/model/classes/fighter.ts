import { Class } from "./class.interface";

export class Fighter implements Class {
    savingThrow= { poison: 13, wands: 14, paralysis: 15, dragonBreath: 16, spells: 18, };
    hd = 8;
    ab = 1;
    abilityRequirements = { strength: 9 };
    weaponRestrictions = ["may wear any armor", "may use any weapon"]
}