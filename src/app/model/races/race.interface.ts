import { Class } from "../classes/class.interface";

export interface Race {
    classes: Class[];
    abilityRequirements: {[ability: string]: number};
    weaponRestrictions: string[];
    specialAbilities: string[];
    savingThrowMods: {[save: string]: number};
}