import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { magicUserSpells } from "../spells";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class MagicUser implements IClass {
    name = ClassName.MagicUser;
    abilityRequirements = { [AbilityName.INTELLIGENCE]: 9 };
    hpBonus = { 10: 1, 11: 2, 12: 3, 13: 4, 14: 5, 15: 6, 16: 7, 17: 8, 18: 9, 19: 10, 20: 11 };
    savingThrow = {
        //                   [1,2-3,4-5,6-7,8-9,10-11,12-13,14-15,16-17,18-19,20]
        [SavingThrowName.POISON]: [13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8],
        [SavingThrowName.WANDS]: [14, 14, 13, 12, 11, 10, 10, 9, 8, 7, 6],
        [SavingThrowName.PARALYSIS]: [13, 13, 12, 11, 10, 9, 9, 8, 7, 6, 5],
        [SavingThrowName.DRAGONBREATH]: [16, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11],
        [SavingThrowName.SPELLS]: [15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8]
    };
    hd = 4;
    ab = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7 ];
    weaponRestrictions = ["may not wear armor nor use a shield", "may use no weapon besides dagger, staff or cudgel"];
    // characterlevel is the key, the value array represents the amount of spells with the index representing spell level
    spellProgression = {
        1: [1],
        2: [2],
        3: [2, 1],
        4: [2, 2],
        5: [2, 2, 1],
        6: [3, 2, 2],
        7: [3, 2, 2, 1],
        8: [3, 3, 2, 2],
        9: [3, 3, 2, 2, 1],
        10: [4, 3, 3, 2, 2],
        11: [4, 4, 3, 2, 2, 1],
        12: [4, 4, 3, 3, 2, 2],
        13: [4, 4, 4, 3, 2, 2],
        14: [4, 4, 4, 3, 3, 2],
        15: [5, 4, 4, 3, 3, 2],
        16: [5, 5, 4, 3, 3, 2],
        17: [5, 5, 4, 4, 3, 3],
        18: [6, 5, 4, 4, 3, 3],
        19: [6, 5, 5, 4, 3, 3],
        20: [6, 5, 5, 4, 4, 3]
    };
    spells = magicUserSpells;
}