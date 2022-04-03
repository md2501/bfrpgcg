import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class Fighter implements IClass {
    name= ClassName.Fighter;
    hpBonus = {10: 2, 11: 4, 12: 6, 13: 8, 14: 10, 15: 12, 16: 14, 17: 16, 18: 18, 19: 20, 20: 22};
    savingThrow= { 
        [SavingThrowName.POISON]: [12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5],
        [SavingThrowName.WANDS]: [13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6],
        [SavingThrowName.PARALYSIS]: [14, 14, 13, 12, 12, 11, 10, 10, 9, 8, 8],
        [SavingThrowName.DRAGONBREATH]: [15, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9],
        [SavingThrowName.SPELLS]: [17, 16, 15, 15, 14, 13, 13, 12, 11, 11, 10]
    };
    hd = 8;
    ab = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7, 7, 8, 8, 8, 9, 9, 10, 10, 10];
    abilityRequirements = { [AbilityName.STRENGTH]: 9 };
    weaponRestrictions = []
}