import { Ability } from "./ability";

export enum AbilityName {
    STRENGTH = "Strength",
    INTELLIGENCE = "Intelligence",
    WISDOM = "Wisdom",
    DEXTERITY = "Dexterity",
    CONSTITUTION = "Constitution",
    CHARISMA = "Charisma"
}

export type IAbilities= {
/*  [AbilityName.STRENGTH]: Ability;
    [AbilityName.INTELLIGENCE]: Ability;
    [AbilityName.WISDOM]: Ability;
    [AbilityName.DEXTERITY]: Ability;
    [AbilityName.CONSTITUTION]: Ability;
    [AbilityName.CHARISMA]: Ability;
*/
    [key in AbilityName]: Ability;
}

