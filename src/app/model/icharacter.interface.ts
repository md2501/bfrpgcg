import { IAbilities } from "./iabilities.interface";
import { Ability } from "./ability.model";
import IClass from "./classes/iclass.interface";
import { IRace } from "./races/irace.interface";
import { ISavingThrows, SavingThrowName } from "./isaving-throws.interface";

export interface ICharacter {
    name: string;
    race: IRace;
    characterClass: IClass;
    hp: number;
    ac: number;
    ab: number;
    level: number;
    abilities: IAbilities;
    gold: number;
    savingThrows: {[key in SavingThrowName as string]: number};
    //equipment: string[];

}