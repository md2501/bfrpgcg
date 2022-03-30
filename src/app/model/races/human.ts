import { Race } from "./race.interface";
import { Class } from "../classes/class.interface";
import { Thief } from "../classes/thief";
import { Cleric } from "../classes/cleric";
import { Fighter } from "../classes/fighter";
import { MagicUser } from "../classes/magic-user";

export class Human implements Race {
    abilityRequirements = {};
    classes = [new Thief, new Cleric, new Fighter, new MagicUser];
    weaponRestrictions = [];
    specialAbilities = ["+10% XP"];
    savingThrowMods = {};
}