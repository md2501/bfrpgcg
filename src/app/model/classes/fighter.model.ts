import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class Fighter implements IClass {
    name= ClassName.Fighter;
    hpBonus = {10: 2, 11: 4, 12: 6, 13: 8, 14: 10, 15: 12, 16: 14, 17: 16, 18: 18, 19: 20, 20: 22};
    savingThrow= { [SavingThrowName.POISON]: 12, [SavingThrowName.WANDS]: 13, [SavingThrowName.PARALYSIS]: 14, [SavingThrowName.DRAGONBREATH]: 15, [SavingThrowName.SPELLS]: 17, };
    hd = 8;
    ab = 1;
    abilityRequirements = { [AbilityName.STRENGTH]: 9 };
    weaponRestrictions = []
}