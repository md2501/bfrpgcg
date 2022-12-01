import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class GreatAxe implements IWeapon {

    private constructor() { }
    private static instance: GreatAxe;
    public static getInstance(): GreatAxe {
        if (!GreatAxe.instance) {
            GreatAxe.instance = new GreatAxe();
        }

        return GreatAxe.instance;
    }

    name = "Great Axe";
    power = 10;
    size = WeaponSize.L;
    type = WeaponType.UNRESTRICTED;
}