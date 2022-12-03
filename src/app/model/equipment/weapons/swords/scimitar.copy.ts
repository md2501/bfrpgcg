import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Scimitar implements IWeapon {

    private constructor() { }
    private static instance: Scimitar;
    public static getInstance(): Scimitar {
        if (!Scimitar.instance) {
            Scimitar.instance = new Scimitar();
        }

        return Scimitar.instance;
    }

    name = "Scimitar";
    power = 8;
    size = WeaponSize.M;
    type = WeaponType.UNRESTRICTED;
    weight = 4;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance()];
}