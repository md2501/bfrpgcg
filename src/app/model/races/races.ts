import { Dwarf } from "./dwarf.model";
import { Elf } from "./elf.model";
import { Halfling } from "./halfling.model";
import { Human } from "./human.model";
import { IRace } from "./irace.interface";
import { RaceName } from "./racename.enum";

const dwarf = new Dwarf;
const elf = new Elf;
const halfling = new Halfling;
const human = new Human;

export const races: IRace[] = [
    dwarf,
    elf,
    halfling,
    human
]