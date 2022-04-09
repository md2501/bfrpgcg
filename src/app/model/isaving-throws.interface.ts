export enum SavingThrowName {
    POISON = "Death Ray Or Poison",
    WANDS = "Magic Wands",
    PARALYSIS = "Paralysis Or Petrify",
    DRAGONBREATH = "Dragon Breath",
    SPELLS = "Spells"
}

export type ISavingThrows = {[save in SavingThrowName as string]: number[]};