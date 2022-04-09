import { AbilityName, IAbilities } from "../iabilities.interface";
import { ISavingThrows } from "../isaving-throws.interface";
import { Spell } from "../spells";
import { ClassName } from "./classname.enum";

export default interface IClass {
    readonly className: ClassName;
    readonly hd: number;
    readonly hpBonus: {[characterLevel: number]: number};
    readonly ab: number[];
    readonly abilityRequirements: { [ability in AbilityName as string]: number };
    readonly weaponRestrictions: string[];
    readonly savingThrow: ISavingThrows;
    readonly classAbilities?: {[ability: string] : { [category: string]: (number| string)[]}};
    readonly spellProgression?: {[characterlevel: number]: number[]};
    readonly spells?: Spell[][];
}