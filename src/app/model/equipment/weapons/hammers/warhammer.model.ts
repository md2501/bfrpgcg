import { Cleric } from "src/app/model/classes/cleric.model";
import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Warhammer implements IWeapon {

    private constructor() { }
    private static instance: Warhammer;
    public static getInstance(): Warhammer {
        if (!Warhammer.instance) {
            Warhammer.instance = new Warhammer();
        }

        return Warhammer.instance;
    }

    name = "Warhammer";
    power = 6;
    size = WeaponSize.S;
    type = WeaponType.BLUNT;
    weight = 6;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance(), Cleric.getInstance()];
}