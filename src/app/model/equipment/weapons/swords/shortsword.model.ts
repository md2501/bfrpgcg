import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Shortsword implements IWeapon {

    private constructor() { }
    private static instance: Shortsword;
    public static getInstance(): Shortsword {
        if (!Shortsword.instance) {
            Shortsword.instance = new Shortsword();
        }

        return Shortsword.instance;
    }

    name = "Shortsword";
    power = 6;
    size = WeaponSize.S;
    type = WeaponType.UNRESTRICTED;
    weight = 3;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance()];
}