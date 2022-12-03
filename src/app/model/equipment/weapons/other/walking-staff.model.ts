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
}