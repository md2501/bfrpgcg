import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class MagicUserThief implements IClass {
    name= ClassName.MagicUserThief;
    hd = 4;
    ab = 1;
    abilityRequirements = { dexterity: 9, strength: 9 };
    weaponRestrictions = ["may only wear leather armor"];
    savingThrow = { poison: 13, wands: 14, paralysis: 13, dragonBreath: 16, spells: 15 };
    specialAbility = ["read magic", {"Open Locks": 20, "Remove Traps": 20, "Pick Pockets": 30, "Move Silently": 25, "Climb Walls": 80, "Hide": 10, "Listen": 30}];
}