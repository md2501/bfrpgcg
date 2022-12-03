import { Cleric } from "../../classes/cleric.model";
import { Fighter } from "../../classes/fighter.model";
import { MagicUserFighter } from "../../classes/magic-user-fighter.model";
import { IArmor } from "./iarmor.interface";

export class ChainMail implements IArmor {

    private constructor() { }
    private static instance: ChainMail;
    public static getInstance(): ChainMail {
        if (!ChainMail.instance) {
            ChainMail.instance = new ChainMail();
        }

        return ChainMail.instance;
    }

    ac = 15;
    weight = 40;
    isShield = false;
    possibleClasses = [ Fighter.getInstance(), Cleric.getInstance(), MagicUserFighter.getInstance()];
}