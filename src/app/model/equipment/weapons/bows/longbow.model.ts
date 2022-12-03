import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
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
    weight = 3;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance()];
}