import { ClassName } from "./classname.enum";

export default interface IClass {
    name: ClassName;
    hd: number;
    ab: number;
    abilityRequirements: { [ability: string]: number };
    weaponRestrictions: string[];
    savingThrow: { poison: number, wands: number, paralysis: number, dragonBreath: number, spells: number };
    specialAbility?: any;
}