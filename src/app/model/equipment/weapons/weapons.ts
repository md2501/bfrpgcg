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
import { Club } from "./other/club.model";
import { Cudgel } from "./other/cudgel.model";
import { PoleArm } from "./other/pole-arm.model";
import { Quarterstaff } from "./other/quarterstaff.model";
import { Sling } from "./other/sling.model";
import { Spear } from "./other/spear.model";
import { WalkingStaff } from "./other/walking-staff.model";
import { Longsword } from "./swords/longsword.model";
import { Scimitar } from "./swords/scimitar.copy";
import { Shortsword } from "./swords/shortsword.model";
import { TwoHandedSword } from "./swords/two-handed-sword.model";

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

const shortsword = Shortsword.getInstance();
const longsword = Longsword.getInstance();
const scimitar = Scimitar.getInstance();
const twoHandedSword = TwoHandedSword.getInstance();

const club = Club.getInstance();
const cudgel = Cudgel.getInstance();
const walkingStaff = WalkingStaff.getInstance();
const quarterstaff = Quarterstaff.getInstance();
const poleArm = PoleArm.getInstance();
const spear = Spear.getInstance();
const sling = Sling.getInstance();

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
    maul,
    // Swords
    shortsword,
    longsword,
    scimitar,
    twoHandedSword,
    // Other
    club,
    cudgel,
    walkingStaff,
    quarterstaff,
    poleArm,
    spear,
    sling
]