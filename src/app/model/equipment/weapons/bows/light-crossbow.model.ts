import { IMissileWeapon } from "../imissile-weapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class LightCrossbow implements IMissileWeapon {

    private constructor() { }
    private static instance: LightCrossbow;
    public static getInstance(): LightCrossbow {
        if (!LightCrossbow.instance) {
            LightCrossbow.instance = new LightCrossbow();
        }

        return LightCrossbow.instance;
    }

    ammo = "Light Quarrel";
    name = "Light Crossbow";
    power = 6;
    size = WeaponSize.M;
    type = WeaponType.UNRESTRICTED;
}