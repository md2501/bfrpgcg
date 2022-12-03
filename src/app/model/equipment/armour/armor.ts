import { ChainMail } from "./chain-mail.model";
import { IArmor } from "./iarmor.interface";
import { LeatherArmor } from "./leather-armor.model";
import { Shield } from "./shield.model";
import { PlateMail } from "./plate-mail.model";

const leatherArmor = LeatherArmor.getInstance();
const chainMail = ChainMail.getInstance();
const plateMail = PlateMail.getInstance();
const shield = Shield.getInstance();

export const armor: IArmor[] = [
    leatherArmor,
    chainMail,
    plateMail,
    shield
]