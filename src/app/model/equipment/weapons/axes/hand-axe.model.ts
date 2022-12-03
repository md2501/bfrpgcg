import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class HandAxe implements IWeapon {

    private constructor() { }
    private static instance: HandAxe;
    public static getInstance(): HandAxe {
        if (!HandAxe.instance) {
            HandAxe.instance = new HandAxe();
        }

        return HandAxe.instance;
    }

    name = "Hand Axe";
    power = 6;
    size = WeaponSize.S;
    type = WeaponType.UNRESTRICTED;
    weight = 5;
}