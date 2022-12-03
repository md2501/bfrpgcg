import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
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
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance()];
}