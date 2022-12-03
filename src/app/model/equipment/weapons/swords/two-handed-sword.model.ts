import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class TwoHandedSword implements IWeapon {

    private constructor() { }
    private static instance: TwoHandedSword;
    public static getInstance(): TwoHandedSword {
        if (!TwoHandedSword.instance) {
            TwoHandedSword.instance = new TwoHandedSword();
        }

        return TwoHandedSword.instance;
    }

    name = "Two-Handed Sword";
    power = 10;
    size = WeaponSize.V;
    type = WeaponType.UNRESTRICTED;
    weight = 10;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance()];
}