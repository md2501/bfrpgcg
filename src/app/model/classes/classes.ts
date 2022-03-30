import { Cleric } from "./cleric"
import { Fighter } from "./fighter"
import IClass from "./iclass.interface";
import { MagicUser } from "./magic-user";
import { MagicUserFighter } from "./magic-user-fighter";
import { MagicUserThief } from "./magic-user-thief";
import { Thief } from "./thief";

const cleric = new Cleric;
const fighter = new Fighter;
const magicUser = new MagicUser;
const thief = new Thief;
const magicUserFighter = new MagicUserFighter;
const magicUserThief = new MagicUserThief;

export const classes: IClass[] = [
    cleric,
    fighter,
    magicUser,
    thief,
    magicUserFighter,
    magicUserThief
]