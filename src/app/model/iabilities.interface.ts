import { Ability } from "./ability.model";

export enum AbilityName {
    STRENGTH = "Strength",
    INTELLIGENCE = "Intelligence",
    WISDOM = "Wisdom",
    DEXTERITY = "Dexterity",
    CONSTITUTION = "Constitution",
    CHARISMA = "Charisma"
}

export type IAbilities = {[ability in AbilityName as string]: Ability}