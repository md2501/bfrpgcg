import { Dwarf } from "./dwarf.model";
import { Elf } from "./elf.model";
import { Halfling } from "./halfling.model";
import { Human } from "./human.model";
import { IRace } from "./irace.interface";

const dwarf = Dwarf.getInstance();
const elf = Elf.getInstance();
const halfling = Halfling.getInstance();
const human = Human.getInstance();

export const races: IRace[] = [
    dwarf,
    elf,
    halfling,
    human
]