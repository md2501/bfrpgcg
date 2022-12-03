import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Warhammer implements IWeapon {

    private constructor() { }
    private static instance: Warhammer;
    public static getInstance(): Warhammer {
        if (!Warhammer.instance) {
            Warhammer.instance = new Warhammer();
        }

        return Warhammer.instance;
    }

    name = "Warhammer";
    power = 6;
    size = WeaponSize.S;
    type = WeaponType.BLUNT;
    weight = 6;
}