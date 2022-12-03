import { Fighter } from "src/app/model/classes/fighter.model";
import { MagicUserFighter } from "src/app/model/classes/magic-user-fighter.model";
import { MagicUserThief } from "src/app/model/classes/magic-user-thief.model";
import { Thief } from "src/app/model/classes/thief.model";
import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class BattleAxe implements IWeapon {

    private constructor() { }
    private static instance: BattleAxe;
    public static getInstance(): BattleAxe {
        if (!BattleAxe.instance) {
            BattleAxe.instance = new BattleAxe();
        }

        return BattleAxe.instance;
    }

    name = "Battle Axe";
    power = 8;
    size = WeaponSize.M;
    type = WeaponType.UNRESTRICTED;
    weight = 7;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance(), Thief.getInstance()];
}