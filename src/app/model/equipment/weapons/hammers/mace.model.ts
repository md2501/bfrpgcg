import { Cleric } from "src/app/model/classes/cleric.model";
import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Mace implements IWeapon {

    private constructor() { }
    private static instance: Mace;
    public static getInstance(): Mace {
        if (!Mace.instance) {
            Mace.instance = new Mace();
        }

        return Mace.instance;
    }

    name = "Mace";
    power = 8;
    size = WeaponSize.M;
    type = WeaponType.BLUNT;
    weight = 10;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance(), Cleric.getInstance()];
}