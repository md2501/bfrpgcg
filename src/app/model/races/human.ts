import { IRace } from "./irace.interface";
import { ClassName } from "../classes/classname.enum";
import { RaceName } from "./racename.enum";

export class Human implements IRace {
    name = RaceName.Human;
    abilityRequirements = {};
    classes = [ClassName.Thief, ClassName.Cleric, ClassName.Fighter, ClassName.MagicUser];
    weaponRestrictions = [];
    specialAbilities = ["+10% XP"];
    savingThrowMods = {};
}