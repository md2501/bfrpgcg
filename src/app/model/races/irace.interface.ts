import { AbilityName } from "../abilities";
import { ClassName } from "../classes/classname.enum";
import { RaceName } from "./racename.enum";

export interface IRace {
    name: RaceName;
    classes: ClassName[];
    abilityRequirements: {[key in AbilityName]?: number};
    weaponRestrictions: string[];
    specialAbilities: string[];
    savingThrowMods: {[save: string]: number};
}