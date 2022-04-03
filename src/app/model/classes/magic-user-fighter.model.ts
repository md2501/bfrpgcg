import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { clericSpells, magicUserSpells } from "../spells";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class MagicUserFighter implements IClass {
    name = ClassName.MagicUserFighter;
    hpBonus = { 10: 2, 11: 4, 12: 6, 13: 8, 14: 10, 15: 12, 16: 14, 17: 16, 18: 18, 19: 20, 20: 22 };
    hd = 6;
    ab = {1: 1, 2: 2, 3: 2, 4: 3, 5: 4, 6: 4, 7: 5, 8: 6, 9: 6, 10: 6, 11: 7, 12: 7, 13: 8, 14: 8, 15: 8, 16: 9, 17: 9, 18: 10, 19: 10, 20: 10}
    abilityRequirements = { [AbilityName.STRENGTH]: 9, [AbilityName.INTELLIGENCE]: 9 };
    weaponRestrictions = []
    savingThrow = {
        [SavingThrowName.POISON]: [12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5],
        [SavingThrowName.WANDS]: [13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6],
        [SavingThrowName.PARALYSIS]: [13, 13, 12, 11, 10, 9, 9, 8, 7, 6, 5],
        [SavingThrowName.DRAGONBREATH]: [15, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9],
        [SavingThrowName.SPELLS]: [15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8]
    };
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
    }
    spells = magicUserSpells;
}