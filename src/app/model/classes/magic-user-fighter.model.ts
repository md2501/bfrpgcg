import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { clericSpells, magicUserSpells } from "../spells";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class MagicUserFighter implements IClass {
    className = ClassName.MagicUserFighter;
    hpBonus = { 10: 2, 11: 4, 12: 6, 13: 8, 14: 10, 15: 12, 16: 14, 17: 16, 18: 18, 19: 20, 20: 22 };
    hd = 6;
    ab = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7, 7, 8, 8, 8, 9, 9, 10, 10, 10];
    abilityRequirements = { [AbilityName.STRENGTH]: 9, [AbilityName.INTELLIGENCE]: 9 };
    weaponRestrictions = []
    savingThrow = {
        [SavingThrowName.POISON]: [12, 11, 11, 10, 9, 9, 8, 7, 7, 6, 5],
        [SavingThrowName.WANDS]: [13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6],
        [SavingThrowName.PARALYSIS]: [13, 13, 12, 11, 10, 9, 9, 8, 7, 6, 5],
        [SavingThrowName.DRAGONBREATH]: [15, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9],
        [SavingThrowName.SPELLS]: [15, 14, 13, 13, 12, 11, 11, 10, 9, 9, 8]
    };
    // characterlevel is the index, the value array represents the amount of spells with the index representing spell level
     spellProgression = [
        [1],
        [2],
        [2, 1],
        [2, 2],
        [2, 2, 1],
        [3, 2, 2],
        [3, 2, 2, 1],
        [3, 3, 2, 2],
        [3, 3, 2, 2, 1],
        [4, 3, 3, 2, 2],
        [4, 4, 3, 2, 2, 1],
        [4, 4, 3, 3, 2, 2],
        [4, 4, 4, 3, 2, 2],
        [4, 4, 4, 3, 3, 2],
        [5, 4, 4, 3, 3, 2],
        [5, 5, 4, 3, 3, 2],
        [5, 5, 4, 4, 3, 3],
        [6, 5, 4, 4, 3, 3],
        [6, 5, 5, 4, 3, 3],
        [6, 5, 5, 4, 4, 3]
    ];
    spells = magicUserSpells;
}