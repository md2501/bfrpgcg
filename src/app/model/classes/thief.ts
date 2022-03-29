import { Class } from "./class.interface";

export class Thief implements Class {
    abilityRequirements= { dexterity: 9 };
    savingThrow= { poison: 13, wands: 14, paralysis: 13, dragonBreath: 16, spells: 15 };
    specialAbility= {"Open Locks": 20, "Remove Traps": 20, "Pick Pockets": 30, "Move Silently": 25, "Climb Walls": 80, "Hide": 10, "Listen": 30};
    hd= 4;
    ab= 1;
    weaponRestrictions= ["may not use metal armor or shields", "may use any weapon"];
}