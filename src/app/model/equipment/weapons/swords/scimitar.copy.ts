import { IWeapon } from "../iweapon.interface";
import { WeaponSize } from "../weapon-size.enum";
import { WeaponType } from "../weapon-type.enum";

export class Scimitar implements IWeapon {

    private constructor() { }
    private static instance: Scimitar;
    public static getInstance(): Scimitar {
        if (!Scimitar.instance) {
            Scimitar.instance = new Scimitar();
        }

        return Scimitar.instance;
    }

    name = "Scimitar";
    power = 8;
    size = WeaponSize.M;
    type = WeaponType.UNRESTRICTED;
    weight = 4;
}