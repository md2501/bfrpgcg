import IClass from "../classes/iclass.interface";

export interface IRace {
    classes: IClass[];
    abilityRequirements: {[ability: string]: number};
    weaponRestrictions: string[];
    specialAbilities: string[];
    savingThrowMods: {[save: string]: number};
}