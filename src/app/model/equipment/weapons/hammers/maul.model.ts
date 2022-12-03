import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Maul implements IWeapon {

    private constructor() { }
    private static instance: Maul;
    public static getInstance(): Maul {
        if (!Maul.instance) {
            Maul.instance = new Maul();
        }

        return Maul.instance;
    }

    name = "Maul";
    power = 10;
    size = WeaponSize.L;
    type = WeaponType.BLUNT;
    weight = 16;
}