import { Cleric } from "src/app/model/classes/cleric.model";
import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { MagicUser } from "src/app/model/classes/magic-user.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class WalkingStaff implements IWeapon {

    private constructor() { }
    private static instance: WalkingStaff;
    public static getInstance(): WalkingStaff {
        if (!WalkingStaff.instance) {
            WalkingStaff.instance = new WalkingStaff();
        }

        return WalkingStaff.instance;
    }

    name = "Walking Staff";
    power = 4;
    size = WeaponSize.M;
    type = WeaponType.MU;
    weight = 1;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance(), Cleric.getInstance(), MagicUser.getInstance()];
}