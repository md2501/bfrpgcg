import { IArmor } from "./iarmor.interface";

export class Shield implements IArmor {

    private constructor() { }
    private static instance: Shield;
    public static getInstance(): Shield {
        if (!Shield.instance) {
            Shield.instance = new Shield();
        }

        return Shield.instance;
    }

    ac = 5;
    weight = 5;
    isShield = true;
}