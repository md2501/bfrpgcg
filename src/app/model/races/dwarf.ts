
import { AbilityName } from "../abilities";
import { ClassName } from "../classes/classname.enum";
import { IRace } from "./irace.interface";
import { RaceName } from "./racename.enum";

export class Dwarf implements IRace {
    name = RaceName.Dwarf;
    specialAbilities = ["Darkvision 60'", "detect slanting passages, traps, shifting walls, new construction: 2/6"];
    abilityRequirements = { [AbilityName.CONSTITUTION]: 9, [AbilityName.CHARISMA]: -17 };
    classes = [ClassName.Cleric, ClassName.Fighter, ClassName.Thief];
    weaponRestrictions = ["may not have a Charisma higher than 17. They may not employ Large weapons more than four feet in length (specifically, two-handed swords, polearms, and longbows)"];
    savingThrowMods = { poison: 4, wands: 4, paralysis: 4, petrify: 4, spells: 4, dragonBreath: 3 };

}