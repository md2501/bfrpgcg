import { IMissileWeapon } from "../imissile-weapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class HeavyCrossbow implements IMissileWeapon {

    private constructor() { }
    private static instance: HeavyCrossbow;
    public static getInstance(): HeavyCrossbow {
        if (!HeavyCrossbow.instance) {
            HeavyCrossbow.instance = new HeavyCrossbow();
        }

        return HeavyCrossbow.instance;
    }

    ammo = "Heavy Quarrel";
    name = "Heavy Crossbow";
    power = 8;
    size = WeaponSize.L;
    type = WeaponType.UNRESTRICTED;
}