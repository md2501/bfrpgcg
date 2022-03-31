
import { AbilityName } from "../iabilities.interface";
import { ClassName } from "../classes/classname.enum";
import { IRace } from "./irace.interface";
import { RaceName } from "./racename.enum";
import { SavingThrowName } from "../isaving-throws.interface";

export class Dwarf implements IRace {
    name = RaceName.Dwarf;
    specialAbilities = ["darkvision 60'", "detect slanting passages, traps, shifting walls, new construction: 2/6"];
    abilityRequirements = { [AbilityName.CONSTITUTION]: 9, [AbilityName.CHARISMA]: -17 };
    classes = [ClassName.Cleric, ClassName.Fighter, ClassName.Thief];
    weaponRestrictions = ["may not use Large weapons more than four feet in length"];
    savingThrowMods = { [SavingThrowName.POISON]: 4, [SavingThrowName.WANDS]: 4, [SavingThrowName.PARALYSIS]: 4, [SavingThrowName.SPELLS]: 4, [SavingThrowName.DRAGONBREATH]: 3 };

}