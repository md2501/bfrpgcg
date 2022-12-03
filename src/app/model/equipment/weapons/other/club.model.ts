import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Club implements IWeapon {

    private constructor() { }
    private static instance: Club;
    public static getInstance(): Club {
        if (!Club.instance) {
            Club.instance = new Club();
        }

        return Club.instance;
    }

    name = "Club";
    power = 4;
    size = WeaponSize.M;
    type = WeaponType.BLUNT;
    weight = 1;
}