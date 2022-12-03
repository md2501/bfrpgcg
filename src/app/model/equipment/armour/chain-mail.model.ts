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
}