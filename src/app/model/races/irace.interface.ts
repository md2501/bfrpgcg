import { AbilityName, IAbilities } from "../iabilities.interface";
import { ClassName } from "../classes/classname.enum";
import { RaceName } from "./racename.enum";
import { SavingThrowName } from "../isaving-throws.interface";

export interface IRace {
    name: RaceName;
    classes: ClassName[];
    abilityRequirements: {[ability in AbilityName as string]: number};
    weaponRestrictions: string[];
    specialAbilities: string[];
    savingThrowMods: {[save in SavingThrowName as string]: number};
}