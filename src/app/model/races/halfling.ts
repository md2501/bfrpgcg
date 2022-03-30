import { Class } from "../classes/class.interface";
import { Cleric } from "../classes/cleric";
import { Fighter } from "../classes/fighter";
import { Thief } from "../classes/thief";
import { Race } from "./race.interface";

export class Halfling implements Race {
    abilityRequirements= { dexterity: 9, strength: -17 };
    classes= [new Thief, new Cleric, new Fighter];
    weaponRestrictions= ["may not use large weapons", "must wield medium weapons with both hands", "never roll larger than six-sided dice (d6) for hit points regardless of class"];
    specialAbilities= ["+1 attack bonus on ranged weapons", "+2 armor class when attacked in melee by creatures larger than man-sized", "+1 initiative", "hide outdoors: 90", "hide indoors: 70"];
    savingThrowMods= { poison: 4, wands: 4, paralysis: 4, spells: 4, dragonBreath: 3 };
}