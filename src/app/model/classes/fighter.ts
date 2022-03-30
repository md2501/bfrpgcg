import { AbilityName } from "../abilities";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class Fighter implements IClass {
    name= ClassName.Fighter;
    specialAbility?: any;
    savingThrow= { poison: 13, wands: 14, paralysis: 15, dragonBreath: 16, spells: 18, };
    hd = 8;
    ab = 1;
    abilityRequirements = { [AbilityName.STRENGTH]: 9 };
    weaponRestrictions = []
}