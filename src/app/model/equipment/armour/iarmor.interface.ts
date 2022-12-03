import IClass from "../../classes/iclass.interface";
import { IEquipment } from "../iequipment.interface";

export interface IArmor extends IEquipment {
    ac: number;
    weight: number;
    isShield: boolean;
    possibleClasses: IClass[];
}