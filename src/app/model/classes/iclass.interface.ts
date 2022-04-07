import { AbilityName, IAbilities } from "../iabilities.interface";
import { ISavingThrows } from "../isaving-throws.interface";
import { Spell } from "../spells";
import { ClassName } from "./classname.enum";

export default interface IClass {
    name: ClassName;
    hd: number;
    hpBonus: {[characterLevel: number]: number};
    ab: number[];
    abilityRequirements: { [ability in AbilityName as string]: number };
    weaponRestrictions: string[];
    savingThrow: ISavingThrows;
    classAbilities?: {[ability: string] : { [category: string]: (number| string)[]}};
    spellProgression?: {[characterlevel: number]: number[]};
    spells?: Spell[][];
}