import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Cudgel implements IWeapon {

    private constructor() { }
    private static instance: Cudgel;
    public static getInstance(): Cudgel {
        if (!Cudgel.instance) {
            Cudgel.instance = new Cudgel();
        }

        return Cudgel.instance;
    }

    name = "Cudgel";
    power = 4;
    size = WeaponSize.M;
    type = WeaponType.MU;
    weight = 1;
}