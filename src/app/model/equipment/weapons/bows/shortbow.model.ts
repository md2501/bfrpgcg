import { IMissileWeapon } from "../imissile-weapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Shortbow implements IMissileWeapon {

    private constructor() { }
    private static instance: Shortbow;
    public static getInstance(): Shortbow {
        if (!Shortbow.instance) {
            Shortbow.instance = new Shortbow();
        }

        return Shortbow.instance;
    }

    ammo = "Shortbow Arrow";
    name = "Shortbow";
    power = 6;
    size = WeaponSize.M;
    type = WeaponType.UNRESTRICTED;
    weight = 2;
}