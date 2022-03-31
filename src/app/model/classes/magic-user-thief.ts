import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class MagicUserThief implements IClass {
    name= ClassName.MagicUserThief;
    hd = 4;
    ab = 1;
    abilityRequirements = { [AbilityName.INTELLIGENCE]: 9, [AbilityName.DEXTERITY]: 9 };
    weaponRestrictions = ["may only wear leather armor"];
    savingThrow = { [SavingThrowName.POISON]: 13, [SavingThrowName.WANDS]: 14, [SavingThrowName.PARALYSIS]: 13, [SavingThrowName.DRAGONBREATH]: 16, [SavingThrowName.SPELLS]: 15 };
    classAbilities = { "Open Locks": 20, "Remove Traps": 20, "Pick Pockets": 30, "Move Silently": 25, "Climb Walls": 80, "Hide": 10, "Listen": 30};
    // an empty string signifies an open spell slot
    spells = ["Read Magic", ""];
}