import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
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
    weight = 14;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance()];
}