import { IRace } from "./irace.interface";
import { ClassName } from "../classes/classname.enum";
import { RaceName } from "./racename.enum";
import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";

export class Halfling implements IRace {
    name= RaceName.Halfling;
    abilityRequirements= { [AbilityName.DEXTERITY]: 9, [AbilityName.STRENGTH]: -17 };
    classes= [ClassName.Thief, ClassName.Cleric, ClassName.Fighter];
    weaponRestrictions= ["may not use large weapons", "must wield medium weapons with both hands", "never roll larger than six-sided dice (d6) for hit points regardless of class"];
    specialAbilities= ["+1 attack bonus on ranged weapons", "+2 armor class when attacked in melee by creatures larger than man-sized", "+1 initiative", "hide outdoors: 90", "hide indoors: 70"];
    savingThrowMods= { [SavingThrowName.POISON]: 4, [SavingThrowName.WANDS]: 4, [SavingThrowName.PARALYSIS]: 4, [SavingThrowName.SPELLS]: 4, [SavingThrowName.DRAGONBREATH]: 3 };
}