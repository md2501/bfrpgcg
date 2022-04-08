import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { clericSpells } from "../spells";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class Cleric implements IClass {
    readonly name = ClassName.Cleric;
    readonly hpBonus = { 10: 1, 11: 2, 12: 3, 13: 4, 14: 5, 15: 6, 16: 7, 17: 8, 18: 9, 19: 10, 20: 11 };
    readonly savingThrow = {
        [SavingThrowName.POISON]: [11, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5],
        [SavingThrowName.WANDS]: [12, 11, 10, 10, 9, 9, 8, 8, 7, 7, 6],
        [SavingThrowName.PARALYSIS]: [14, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9],
        [SavingThrowName.DRAGONBREATH]: [16, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11],
        [SavingThrowName.SPELLS]: [15, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10]
    };
    readonly abilityRequirements = { [AbilityName.WISDOM]: 9 };
    readonly hd = 6;
    readonly ab = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8];
    readonly weaponRestrictions = ["may only use blunt weapons"];
    readonly classAbilities = {"Turn the Undead": {
            "Skeleton (1HD)": [13, 11, 9, 7, 5, 3, 2, "T", "T", "T", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D"],
            "Zombie (2HD)": [17, 15, 13, 11, 9, 7, 5, 3, 2, "T", "T", "T", "D", "D", "D", "D", "D", "D", "D", "D"],
            "Ghoul (3HD)": [19, 18, 17, 15, 13, 11, 9, 7, 5, 3, 2, "T", "T", "T", "D", "D", "D", "D", "D", "D"],
            "Wight (4HD)": ["No", 20, 19, 18, 17, 15, 13, 11, 9, 7, 5, 3, 2, "T", "T", "T", "D", "D", "D", "D"],
            "Wraith (5HD)": ["No", "No", "No", 20, 19, 18, 17, 15, 13, 11, 9, 7, 5, 3, 2, "T", "T", "T", "D", "D"],
            "Mummy (6HD)": ["No", "No", "No", "No", "No", 20, 19, 18, 17, 15, 13, 11, 9, 7, 5, 3, 2, "T", "T", "T"],
            "Spectre (7HD)": ["No", "No", "No", "No", "No", "No", "No", 20, 19, 18, 17, 15, 13, 11, 9, 7, 5, 3, 2, "T"],
            "Vampire (8HD)": ["No", "No", "No", "No", "No", "No", "No", "No", "No", 20, 19, 18, 17, 15, 13, 11, 9, 7, 5, 3],
            "Ghost (9+HD)": ["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", 20, 19, 18, 17, 15, 13, 11, 9, 7]
    }};
    // characterlevel is the key, the value array represents the amount of spells with the index representing spell level
    readonly spellProgression = {
        1: [],
        2: [1],
        3: [2],
        4: [2, 1],
        5: [2, 2],
        6: [2, 2, 1],
        7: [3, 2, 2],
        8: [3, 2, 2, 1],
        9: [3, 3, 2, 2],
        10: [3, 3, 2, 2, 1],
        11: [4, 3, 3, 2, 2],
        12: [4, 4, 3, 2, 2, 1],
        13: [4, 4, 3, 3, 2, 2],
        14: [4, 4, 4, 3, 2, 2],
        15: [4, 4, 4, 3, 3, 2],
        16: [5, 4, 4, 3, 3, 2],
        17: [5, 5, 4, 3, 3, 2],
        18: [5, 5, 4, 4, 3, 3],
        19: [6, 5, 4, 4, 3, 3],
        20: [6, 5, 5, 4, 3, 3]
    };
    readonly spells = clericSpells;
}