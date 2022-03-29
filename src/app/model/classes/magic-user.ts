import { Class } from "./class.interface";

export class MagicUser implements Class {
    abilityRequirements= { intelligence: 9 };
    savingThrow= { poison: 13, wands: 14, paralysis: 13, dragonBreath: 16, spells: 15 };
    specialAbility = "read magic" // +1 level 1 spell of course
    hd= 4;
    ab= 1;
    weaponRestrictions= ["may not wear armor nor use a shield", "may use no weapon besides dagger, staff or cudgel"]
}