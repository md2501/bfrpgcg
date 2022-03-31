import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class MagicUserFighter implements IClass {
    name= ClassName.MagicUserFighter;
    hd = 6;
    ab = 1;
    abilityRequirements = { [AbilityName.STRENGTH]: 9, [AbilityName.INTELLIGENCE]: 9 };
    weaponRestrictions = []
    savingThrow = { [SavingThrowName.POISON]: 13, [SavingThrowName.WANDS]: 14, [SavingThrowName.PARALYSIS]: 15, [SavingThrowName.DRAGONBREATH]: 16, [SavingThrowName.SPELLS]: 18 };
    // an empty string signifies an open spell slot
    spells = ["Read Magic", ""];
}