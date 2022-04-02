import { Cleric } from "./cleric.model"
import { Fighter } from "./fighter.model"
import IClass from "./iclass.interface";
import { MagicUser } from "./magic-user.model";
import { MagicUserFighter } from "./magic-user-fighter.model";
import { MagicUserThief } from "./magic-user-thief.model";
import { Thief } from "./thief.model";

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