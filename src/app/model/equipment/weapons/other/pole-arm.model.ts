import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class PoleArm implements IWeapon {

    private constructor() { }
    private static instance: PoleArm;
    public static getInstance(): PoleArm {
        if (!PoleArm.instance) {
            PoleArm.instance = new PoleArm();
        }

        return PoleArm.instance;
    }

    name = "Pole Arm";
    power = 10;
    size = WeaponSize.V;
    type = WeaponType.UNRESTRICTED;
    weight = 15;
}