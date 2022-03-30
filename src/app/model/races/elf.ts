import { IRace } from "./irace.interface";
import { ClassName } from "../classes/classname.enum";
import { RaceName } from "./racename.enum";
import { Ability } from "../ability";
import { AbilityName } from "../abilities";

export class Elf implements IRace {
    name= RaceName.Elf;
    abilityRequirements = { [AbilityName.INTELLIGENCE]: 9, [AbilityName.CONSTITUTION]: -17 };
    classes = [ClassName.Cleric, ClassName.Fighter, ClassName.MagicUser, ClassName.Thief, ClassName.MagicUserThief, ClassName.MagicUserFighter]
    weaponRestrictions = [];
    specialAbilities = ["Darkvision 60'", "find secret doors 2/6, 1/6 without searching", "immune to paralyzing acid of ghouls", "surprise 1/6"]
    savingThrowMods = { paralysis: 1, wands: 2, spells: 2 };
}