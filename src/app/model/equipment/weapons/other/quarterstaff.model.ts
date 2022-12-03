import { Cleric } from "src/app/model/classes/cleric.model";
import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Quarterstaff implements IWeapon {

    private constructor() { }
    private static instance: Quarterstaff;
    public static getInstance(): Quarterstaff {
        if (!Quarterstaff.instance) {
            Quarterstaff.instance = new Quarterstaff();
        }

        return Quarterstaff.instance;
    }

    name = "Quarterstaff";
    power = 6;
    size = WeaponSize.L;
    type = WeaponType.BLUNT;
    weight = 4;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance(), Cleric.getInstance()];
}