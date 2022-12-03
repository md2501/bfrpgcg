import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class GreatAxe implements IWeapon {

    private constructor() { }
    private static instance: GreatAxe;
    public static getInstance(): GreatAxe {
        if (!GreatAxe.instance) {
            GreatAxe.instance = new GreatAxe();
        }

        return GreatAxe.instance;
    }

    name = "Great Axe";
    power = 10;
    size = WeaponSize.L;
    type = WeaponType.UNRESTRICTED;
    weight = 15;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance()];
}