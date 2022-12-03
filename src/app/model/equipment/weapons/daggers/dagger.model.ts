import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { MagicUser } from "src/app/model/classes/magic-user.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Dagger implements IWeapon {

    private constructor() { }
    private static instance: Dagger;
    public static getInstance(): Dagger {
        if (!Dagger.instance) {
            Dagger.instance = new Dagger();
        }

        return Dagger.instance;
    }

    name = "Dagger";
    power = 4;
    size = WeaponSize.S;
    type = WeaponType.MU;
    weight = 1;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance(), MagicUser.getInstance()];
}