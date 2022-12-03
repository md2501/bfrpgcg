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
}