import { IAbilities } from "./abilities.interface";
import { Ability } from "./ability";
import IClass from "./classes/iclass.interface";
import { IRace } from "./races/irace.interface";

export interface ICharacter {
    name: string;
    race: IRace;
    class: IClass;
    ac: number;
    ab: number;
    abilities: IAbilities;
    gold: number;
    //equipment: string[];

}