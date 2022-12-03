import { IMissileWeapon } from "../imissile-weapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Sling implements IMissileWeapon {

    private constructor() { }
    private static instance: Sling;
    public static getInstance(): Sling {
        if (!Sling.instance) {
            Sling.instance = new Sling();
        }

        return Sling.instance;
    }

    ammo = "Bullet";
    name = "Sling";
    power = 4;
    size = WeaponSize.S;
    type = WeaponType.BLUNT;
    weight = 0.1;
}