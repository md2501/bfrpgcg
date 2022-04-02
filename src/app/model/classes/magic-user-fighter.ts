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
    savingThrow= { [SavingThrowName.POISON]: 12, [SavingThrowName.WANDS]: 13, [SavingThrowName.PARALYSIS]: 13, [SavingThrowName.DRAGONBREATH]: 15, [SavingThrowName.SPELLS]: 15, };
    // an empty string signifies an open spell slot
    spells = ["Read Magic", ""];
}