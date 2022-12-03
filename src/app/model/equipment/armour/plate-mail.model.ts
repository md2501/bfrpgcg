import { Cleric } from "../../classes/cleric.model";
import { Fighter } from "../../classes/fighter.model";
import { MagicUserFighter } from "../../classes/magic-user-fighter.model";
import { IArmor } from "./iarmor.interface";

export class PlateMail implements IArmor {

    private constructor() { }
    private static instance: PlateMail;
    public static getInstance(): PlateMail {
        if (!PlateMail.instance) {
            PlateMail.instance = new PlateMail();
        }

        return PlateMail.instance;
    }

    ac = 17;
    weight = 50;
    isShield = false;
    possibleClasses = [Fighter.getInstance(), MagicUserFighter.getInstance(), Cleric.getInstance()];
}