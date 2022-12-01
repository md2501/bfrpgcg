import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Dagger implements IWeapon {

    private constructor() { }
    private static instance: Dagger;
    public static getInstance(): Dagger {
        if (!Dagger.instance) {
            Dagger.instance = new Dagger();
        }

        return Dagger.instance;
    }

    name = "Dagger";
    power = 4;
    size = WeaponSize.S;
    type = WeaponType.MU;
}