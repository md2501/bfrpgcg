import { Class } from "../classes/class.interface";
import { Race } from "./race.interface";

export class Halfling implements Race {
    classes: Class[];
    statRequirements: { [stat: string]: number; };
    weaponRestrictions: string[];
    specialAbilities: string[];
    savingThrowMods: { [stat: string]: number; };

}