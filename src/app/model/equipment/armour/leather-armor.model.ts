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
}