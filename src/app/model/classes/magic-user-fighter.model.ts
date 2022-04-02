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
    savingThrow = { [SavingThrowName.POISON]: 13, [SavingThrowName.WANDS]: 14, [SavingThrowName.PARALYSIS]: 13, [SavingThrowName.DRAGONBREATH]: 16, [SavingThrowName.SPELLS]: 15 };
    // characterlevel is the key, the value array represents the amount of spells with the index representing spell level
    spells = {
        1: [1],
        2: [2],
        3: [2,1],
        4: [2,2],
        5: [2,2,1],
        6: [3,2,2],
        7: [3,2,2,1],
        8: [3,3,2,2],
        9: [3,3,2,2,1],
        10: [4,3,3,2,2],
        11: [4,4,3,2,2,1],
        12: [4,4,3,3,2,2],
        13: [4,4,4,3,2,2],
        14: [4,4,4,3,3,2],
        15: [5,4,4,3,3,2],
        16: [5,5,4,3,3,2],
        17: [5,5,4,4,3,3],
        18: [6,5,4,4,3,3],
        19: [6,5,5,4,3,3],
        20: [6,5,5,4,4,3]
    }   
}