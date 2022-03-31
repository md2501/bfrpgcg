import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class Thief implements IClass {
    name = ClassName.Thief;
    abilityRequirements = { [AbilityName.DEXTERITY]: 9 };
    savingThrow = { [SavingThrowName.POISON]: 13, [SavingThrowName.WANDS]: 14, [SavingThrowName.PARALYSIS]: 13, [SavingThrowName.DRAGONBREATH]: 16, [SavingThrowName.SPELLS]: 15 };
    specialAbility = { "Open Locks": 20, "Remove Traps": 20, "Pick Pockets": 30, "Move Silently": 25, "Climb Walls": 80, "Hide": 10, "Listen": 30 };
    hd = 4;
    ab = 1;
    weaponRestrictions = ["may not use metal armor or shields"];
}