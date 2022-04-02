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
    // characterlevel is the key, the value array represents the amount of spells with the index representing spell level
    spells= {
        2: [1],
        3: [2],
        4: [2,1],
        5: [2,2],
        6: [2,2,1],
        7: [3,2,2],
        8: [3,2,2,1],
        9: [3,3,2,2],
        10: [3,3,2,2,1],
        11: [4,3,3,2,2],
        12: [4,4,3,2,2,1],
        13: [4,4,3,3,2,2],
        14: [4,4,4,3,2,2],
        15: [4,4,4,3,3,2],
        16: [5,4,4,3,3,2],
        17: [5,5,4,3,3,2],
        18: [5,5,4,4,3,3],
        19: [6,5,4,4,3,3],
        20: [6,5,5,4,3,3]
    }
}