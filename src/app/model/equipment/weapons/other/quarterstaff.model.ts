import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Quarterstaff implements IWeapon {

    private constructor() { }
    private static instance: Quarterstaff;
    public static getInstance(): Quarterstaff {
        if (!Quarterstaff.instance) {
            Quarterstaff.instance = new Quarterstaff();
        }

        return Quarterstaff.instance;
    }

    name = "Quarterstaff";
    power = 6;
    size = WeaponSize.L;
    type = WeaponType.BLUNT;
    weight = 4;
}