import { Class } from "../classes/class.interface";
import { Cleric } from "../classes/cleric";
import { Fighter } from "../classes/fighter";
import { MagicUser } from "../classes/magic-user";
import { Thief } from "../classes/thief";
import { Race } from "./race.interface";

export class Elf implements Race {
    abilityRequirements = { intelligence: 9, constitution: -17 };
    classes = [new Cleric, new Fighter, new MagicUser, new Thief, new MagicUserThief, new MagicUserFighter]
    weaponRestrictions = [];
    specialAbilities = ["Darkvision 60'", "find secret doors 2/6, 1/6 without searching", "immune to paralyzing acid of ghouls", "surprise 1/6"]
    savingThrowMods = { paralysis: 1, wands: 2, spells: 2 };
}