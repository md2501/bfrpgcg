import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class Fighter implements IClass {
    name= ClassName.Fighter;
    savingThrow= { [SavingThrowName.POISON]: 13, [SavingThrowName.WANDS]: 14, [SavingThrowName.PARALYSIS]: 15, [SavingThrowName.DRAGONBREATH]: 16, [SavingThrowName.SPELLS]: 18, };
    hd = 8;
    ab = 1;
    abilityRequirements = { [AbilityName.STRENGTH]: 9 };
    weaponRestrictions = []
}