import { Cleric } from "src/app/model/classes/cleric.model";
import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
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
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance(), Cleric.getInstance()];
}