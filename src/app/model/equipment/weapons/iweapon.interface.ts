import { WeaponSize } from "./weapon-size.enum";
import { WeaponType } from "./weapon-type.enum";

export interface IWeapon {
    name: string;
    power: number;
    size: WeaponSize;
    type: WeaponType;
}