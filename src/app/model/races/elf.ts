import IClass from "../classes/iclass.interface";
import { Cleric } from "../classes/cleric";
import { Fighter } from "../classes/fighter";
import { MagicUser } from "../classes/magic-user";
import { MagicUserFighter } from "../classes/magic-user-fighter";
import { MagicUserThief } from "../classes/magic-user-thief";
import { Thief } from "../classes/thief";
import { IRace } from "./irace.interface";

export class Elf implements IRace {
    abilityRequirements = { intelligence: 9, constitution: -17 };
    classes = [new Cleric, new Fighter, new MagicUser, new Thief, new MagicUserThief, new MagicUserFighter]
    weaponRestrictions = [];
    specialAbilities = ["Darkvision 60'", "find secret doors 2/6, 1/6 without searching", "immune to paralyzing acid of ghouls", "surprise 1/6"]
    savingThrowMods = { paralysis: 1, wands: 2, spells: 2 };
}