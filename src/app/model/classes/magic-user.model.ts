import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { magicUserSpells } from "../spells";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class MagicUser implements IClass {

    private constructor() { }
    private static instance: MagicUser;
    public static getInstance(): MagicUser{
        if (!MagicUser.instance) {
            MagicUser.instance = new MagicUser();
        }

        return MagicUser.instance;
    }

    className = ClassName.MAGICUSER;
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
    ab = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7];
    weaponRestrictions = ["May not wear armor nor use a shield", "May use no weapon besides dagger, staff or cudgel"];
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