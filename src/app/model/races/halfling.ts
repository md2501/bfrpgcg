import { IRace } from "./irace.interface";
import { ClassName } from "../classes/classname.enum";
import { RaceName } from "./racename.enum";

export class Halfling implements IRace {
    name= RaceName.Halfling;
    abilityRequirements= { dexterity: 9, strength: -17 };
    classes= [ClassName.Thief, ClassName.Cleric, ClassName.Fighter];
    weaponRestrictions= ["may not use large weapons", "must wield medium weapons with both hands", "never roll larger than six-sided dice (d6) for hit points regardless of class"];
    specialAbilities= ["+1 attack bonus on ranged weapons", "+2 armor class when attacked in melee by creatures larger than man-sized", "+1 initiative", "hide outdoors: 90", "hide indoors: 70"];
    savingThrowMods= { poison: 4, wands: 4, paralysis: 4, spells: 4, dragonBreath: 3 };
}