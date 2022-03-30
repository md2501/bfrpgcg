import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class Cleric implements IClass {
    name= ClassName.Cleric;
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