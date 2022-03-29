import { Class } from "../classes/class.interface";
import { Cleric } from "../classes/cleric";
import { Fighter } from "../classes/fighter";
import { Thief } from "../classes/thief";
import { Race } from "./race.interface";

export class Dwarf implements Race {
    specialAbilities= ["Darkvision 60'", "detect slanting passages, traps, shifting walls, new construction: 2/6"];
    abilityRequirements = { constitution: 9, charisma: -17 };
    classes = [new Cleric, new Fighter, new Thief];
    weaponRestrictions= ["may not have a Charisma higher than 17. They may not employ Large weapons more than four feet in length (specifically, two-handed swords, polearms, and longbows)"];
    savingThrowMods= { poison: 4, wands: 4, paralysis: 4, petrify: 4, spells: 4, dragonbreath: 3};

}