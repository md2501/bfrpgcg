import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Spear implements IWeapon {

    private constructor() { }
    private static instance: Spear;
    public static getInstance(): Spear {
        if (!Spear.instance) {
            Spear.instance = new Spear();
        }

        return Spear.instance;
    }

    name = "Spear";
    power = 8;
    size = WeaponSize.M;
    type = WeaponType.UNRESTRICTED;
    weight = 5;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance()];
}