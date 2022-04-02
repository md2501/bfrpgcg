import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class Cleric implements IClass {
    name= ClassName.Cleric;
    savingThrow = {
        [SavingThrowName.POISON]: 11, [SavingThrowName.WANDS]: 12, [SavingThrowName.PARALYSIS]: 14, [SavingThrowName.DRAGONBREATH]: 16,
        [SavingThrowName.SPELLS]: 15
    };
    abilityRequirements = { [AbilityName.WISDOM]: 9 };
    hd = 6;
    ab = 1;
    weaponRestrictions = ["may only use blunt weapons"];
    classAbilities={"Turn the Undead": ""};
}