import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { clericSpells } from "../spells";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

const CLERIC_SPECIFICS_KEY = "game.classes.cleric.specifics"

export class Cleric implements IClass {
    
    private constructor() { }
    private static instance: Cleric;
    public static getInstance(): Cleric {
        if (!Cleric.instance) {
            Cleric.instance = new Cleric();
        }

        return Cleric.instance;
    }

    className = ClassName.CLERIC;
    hpBonus = { 10: 1, 11: 2, 12: 3, 13: 4, 14: 5, 15: 6, 16: 7, 17: 8, 18: 9, 19: 10, 20: 11 };
    savingThrow = {
        [SavingThrowName.POISON]: [11, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5],
        [SavingThrowName.WANDS]: [12, 11, 10, 10, 9, 9, 8, 8, 7, 7, 6],
        [SavingThrowName.PARALYSIS]: [14, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9],
        [SavingThrowName.DRAGONBREATH]: [16, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11],
        [SavingThrowName.SPELLS]: [15, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10]
    };
    abilityRequirements = { [AbilityName.WISDOM]: 9 };
    hd = 6;
    ab = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8];
    weaponRestrictions = [`${CLERIC_SPECIFICS_KEY}.weaponRestrictions.onlyBluntWeapons`];
    classAbilities = {"Turn the Undead": {
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
    // characterlevel is the index, the value array represents the amount of spells with the index representing spell level
    spellProgression = [
        [],
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
        [6, 5, 5, 4, 3, 3]
    ];
    spells = clericSpells;
}