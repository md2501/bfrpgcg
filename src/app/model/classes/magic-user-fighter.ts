import { AbilityName } from "../abilities";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class MagicUserFighter implements IClass {
    name= ClassName.MagicUserFighter;
    hd = 6;
    ab = 1;
    abilityRequirements = { [AbilityName.STRENGTH]: 9, [AbilityName.INTELLIGENCE]: 9 };
    weaponRestrictions = []
    savingThrow = { poison: 13, wands: 14, paralysis: 15, dragonBreath: 16, spells: 18 };
    specialAbility = "read magic";
}