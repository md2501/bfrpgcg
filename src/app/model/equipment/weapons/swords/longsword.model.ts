import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Longsword implements IWeapon {

    private constructor() { }
    private static instance: Longsword;
    public static getInstance(): Longsword {
        if (!Longsword.instance) {
            Longsword.instance = new Longsword();
        }

        return Longsword.instance;
    }

    name = "Longsword";
    power = 8;
    size = WeaponSize.M;
    type = WeaponType.UNRESTRICTED;
    weight = 4;
}