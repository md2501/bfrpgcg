import { BattleAxe } from "./axes/battle-axe.model";
import { GreatAxe } from "./axes/great-axe.model";
import { HandAxe } from "./axes/hand-axe.model";
import { HeavyCrossbow } from "./bows/heavy-crossbow.model";
import { LightCrossbow } from "./bows/light-crossbow.model";
import { Longbow } from "./bows/longbow.model";
import { Shortbow } from "./bows/shortbow.model";
import { Dagger } from "./daggers/dagger.model";
import { Mace } from "./hammers/mace.model";
import { Maul } from "./hammers/maul.model";
import { Warhammer } from "./hammers/warhammer.model";
import { IWeapon } from "./iweapon.interface";

const handAxe = HandAxe.getInstance();
const battleAxe = BattleAxe.getInstance();
const greatAxe = GreatAxe.getInstance();

const shortBow = Shortbow.getInstance();
const longBow = Longbow.getInstance();
const lightCrossbow = LightCrossbow.getInstance();
const heavyCrossbow = HeavyCrossbow.getInstance();

const dagger = Dagger.getInstance();

const warhammer = Warhammer.getInstance();
const mace = Mace.getInstance();
const maul = Maul.getInstance();


export const weapons: IWeapon[] = [
    // Axes
    handAxe,
    battleAxe,
    greatAxe,
    // Bows
    shortBow,
    longBow,
    lightCrossbow,
    heavyCrossbow,
    // Daggers
    dagger,
    // Hammers and Maces
    warhammer,
    mace,
    maul
]