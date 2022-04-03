import { AbilityName, IAbilities } from "../iabilities.interface";
import { ISavingThrows } from "../isaving-throws.interface";
import { ClassName } from "./classname.enum";

export default interface IClass {
    name: ClassName;
    hd: number;
    hpBonus: {[characterLevel: number]: number};
    ab: {[characterLevel: number]: number};
    abilityRequirements: { [ability in AbilityName as string]: number };
    weaponRestrictions: string[];
    savingThrow: ISavingThrows;
    classAbilities?: { [ability: string]: string | number[] };
    // spell progression
    spells?: {[characterlevel: number]: number[]}
}