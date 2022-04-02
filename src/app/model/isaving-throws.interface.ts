export enum SavingThrowName {
    POISON = "Death Ray or Poison",
    WANDS = "Magic Wands",
    PARALYSIS = "Paralysis or Petrify",
    DRAGONBREATH = "Dragon Breath",
    SPELLS = "Spells"
}

export type ISavingThrows = {[save in SavingThrowName as string]: number[]};