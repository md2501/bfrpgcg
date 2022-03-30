import { Dwarf } from "./dwarf";
import { Elf } from "./elf";
import { Halfling } from "./halfling";
import { Human } from "./human";
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