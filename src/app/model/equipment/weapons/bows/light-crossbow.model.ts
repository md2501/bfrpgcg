import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
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
    weight = 7;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance()];
}