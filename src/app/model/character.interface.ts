import { Ability } from "./ability";
import { Class } from "./classes/class.interface";
import { Race } from "./races/race.interface";

export interface Character {
    name: string;
    race: Race;
    class: Class;
    ac: number;
    ab: number;
    strength: Ability;
    dexterity: Ability;
    intelligence: Ability;
    wisdom: Ability;
    constitution: Ability;
    charisma: Ability;
    gold: number;
    //equipment: string[];

}