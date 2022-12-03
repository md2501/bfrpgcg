import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Mace implements IWeapon {

    private constructor() { }
    private static instance: Mace;
    public static getInstance(): Mace {
        if (!Mace.instance) {
            Mace.instance = new Mace();
        }

        return Mace.instance;
    }

    name = "Mace";
    power = 8;
    size = WeaponSize.M;
    type = WeaponType.BLUNT;
    weight = 10;
}