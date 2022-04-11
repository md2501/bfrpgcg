import { Cleric } from "./cleric.model"
import { Fighter } from "./fighter.model"
import IClass from "./iclass.interface";
import { MagicUser } from "./magic-user.model";
import { MagicUserFighter } from "./magic-user-fighter.model";
import { MagicUserThief } from "./magic-user-thief.model";
import { Thief } from "./thief.model";

const cleric = Cleric.getInstance();
const fighter = Fighter.getInstance();
const magicUser = MagicUser.getInstance();
const thief = Thief.getInstance();
const magicUserFighter = MagicUserFighter.getInstance();
const magicUserThief = MagicUserThief.getInstance();

export const classes: IClass[] = [
    cleric,
    fighter,
    magicUser,
    thief,
    magicUserFighter,
    magicUserThief
]