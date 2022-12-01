import { IMissileWeapon } from "../imissile-weapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Longbow implements IMissileWeapon {

    private constructor() { }
    private static instance: Longbow;
    public static getInstance(): Longbow {
        if (!Longbow.instance) {
            Longbow.instance = new Longbow();
        }

        return Longbow.instance;
    }

    ammo = "Longbow Arrow";
    name = "Longbow";
    power = 8;
    size = WeaponSize.V;
    type = WeaponType.UNRESTRICTED;
}