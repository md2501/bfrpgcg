import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

export class MagicUser implements IClass {
    name = ClassName.MagicUser;
    abilityRequirements = { [AbilityName.INTELLIGENCE]: 9 };
    savingThrow = { [SavingThrowName.POISON]: 13, [SavingThrowName.WANDS]: 14, [SavingThrowName.PARALYSIS]: 13, [SavingThrowName.DRAGONBREATH]: 16, [SavingThrowName.SPELLS]: 15 };
    specialAbility = {"read magic":""} // +1 level 1 spell of course
    hd = 4;
    ab = 1;
    weaponRestrictions = ["may not wear armor nor use a shield", "may use no weapon besides dagger, staff or cudgel"]
}