import IClass from "../../classes/iclass.interface";
import { IEquipment } from "../iequipment.interface";
import { WeaponSize } from "./weapon-size.enum";

export interface IWeapon extends IEquipment {
    name: string;
    power: number;
    size: WeaponSize;
    possibleClasses: IClass[];
    weight: number;
}