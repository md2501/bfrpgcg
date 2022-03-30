import { AbilityName, IAbilities } from "../abilities";
import { ClassName } from "../classes/classname.enum";
import { RaceName } from "./racename.enum";

export interface IRace {
    name: RaceName;
    classes: ClassName[];
    abilityRequirements: {[ability in AbilityName as string]: number};
    weaponRestrictions: string[];
    specialAbilities: string[];
    savingThrowMods: {[save: string]: number};
}