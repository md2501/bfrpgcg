import { classes } from "../../classes/classes";
import { Cleric } from "../../classes/cleric.model";
import { Fighter } from "../../classes/fighter.model";
import { MagicUserFighter } from "../../classes/magic-user-fighter.model";
import { MagicUserThief } from "../../classes/magic-user-thief.model";
import { Thief } from "../../classes/thief.model";
import { IArmor } from "./iarmor.interface";

export class LeatherArmor implements IArmor {

    private constructor() { }
    private static instance: LeatherArmor;
    public static getInstance(): LeatherArmor {
        if (!LeatherArmor.instance) {
            LeatherArmor.instance = new LeatherArmor();
        }

        return LeatherArmor.instance;
    }

    ac = 15;
    weight = 0;
    isShield = false;
    possibleClasses = [Thief.getInstance(), Fighter.getInstance(), Cleric.getInstance(), MagicUserFighter.getInstance(), MagicUserThief.getInstance()];
}