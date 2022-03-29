import { Race } from "./race.interface";
import { Class } from "../classes/class.interface";

export class Human implements Race {
    classes: Class[];
    statRequirements: { [stat: string]: number; };
    weaponRestrictions: string[];
    specialAbilities: string[];
    savingThrowMods: { [stat: string]: number; };
}