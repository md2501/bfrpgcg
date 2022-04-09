import { IRace } from "./irace.interface";
import { ClassName } from "../classes/classname.enum";
import { RaceName } from "./racename.enum";
import { Ability } from "../ability.model";
import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";

const ELF_SPECIFICS_KEY = "game.races.elf.specifics"

export class Elf implements IRace {
    raceName = RaceName.Elf;
    abilityRequirements = { [AbilityName.INTELLIGENCE]: 9, [AbilityName.CONSTITUTION]: -17 };
    classes = [ClassName.Cleric, ClassName.Fighter, ClassName.MagicUser, ClassName.Thief, ClassName.MagicUserThief, ClassName.MagicUserFighter]
    weaponRestrictions = [];
    // specialAbilities = ["darkvision 60'", "find secret doors 2/6, 1/6 without searching", "immune to paralyzing acid of ghouls", "surprise 1/6"]
    specialAbilities = [
        { 
            translationKey: `${ELF_SPECIFICS_KEY}.specialAbilities.darkvision`, 
            params: { VALUE: 60 }
        },
        { 
            translationKey: `${ELF_SPECIFICS_KEY}.specialAbilities.findSecretDoors`, 
            params: { VALUE1: "2/6", VALUE2: "1/6" }
        },
        { 
            translationKey: `${ELF_SPECIFICS_KEY}.specialAbilities.immuneToGhoulAcid`, 
        },
        { 
            translationKey: `${ELF_SPECIFICS_KEY}.specialAbilities.surprise`, 
            params: { VALUE: "1/6" }
        }
    ];
    savingThrowMods = { [SavingThrowName.PARALYSIS]: 1, [SavingThrowName.WANDS]: 2, [SavingThrowName.SPELLS]: 2 };
    names = ["Falenas Shapetor",
        "Kindreth Quithana",
        "Tamnaeth Magrel",
        "Malonne Qijyre",
        "Maeral Waesfir",
        "Erendriel Thelamin",
        "Tanathil Fenmaris",
        "Haemir Dorydark",
        "Ivasaar Luran",
        "Ivasaar Wynbella",
        "Gaelin Ianmys",
        "Ilphas Magdove",
        "Iliphar Qivyre",
        "Myrdin Caiydark",
        "Bellas Sarfir",
        "Sylvar Qithyra",
        "Vaeril Urisatra",
        "Inchel Bryven",
        "Rennyn Lurona",
        "Lierin Shafaren",
        "Gaelin Bigella",
        "Anfalen Yelkian",
        "Lathlaeril Norwenys",
        "Aimer Sylpeiros",
        "Rhalyf Trisran",
        "Kelvhan Kelxalim",
        "Gaeleath Admys",
        "Halueve Quiberos",
        "Shandalar Ralolen",
        "Sharian Dafaren",
        "Zeno Zingolor",
        "Elen Jocaryn",
        "Keenor Waeslen",
        "Ruehnar Trisphine",
        "Elas Eilkrana",
        "Azariah Vallee",
        "Alasse Morrona",
        "Ariawyn Glynneiros",
        "Darunia Fabella",
        "Horith Craxidor",
        "Samblar Enynore",
        "Giullis Genbella",
        "Saelethil Qinren",
        "Orist Phiwenys",
        "Gormon Qinra",
        "Eltaor Wranxalim",
        "Lathai Theqen",
        "Afamrail Liaroris",
        "Neldor Yelgwyn",
        "Theodmer Orifir",
        "Rosaniya Olobanise",
        "Ariawyn Lutoris",
        "Makaela Rohana",
        "Umilythe Daqirelle",
        "Alasse Presvaris",
        "Laerdya Perjor",
        "Imryll Luwraek",
        "Aleesia Ularic",
        "Leilatha Holathyra",
        "Keishara Wranhice",
        "Belanor Olofiel",
        "Ettrian Biroris",
        "Galather Aekrana",
        "Erendriel Urivyre",
        "Sontar Caitris",
        "Vulmon Caijeon",
        "Edwyrd Sylydark",
        "Arel Triszumin",
        "Vulre Elagella",
        "Flardryn Pergolor",
        "Nithroel Yllazeiros",
        "Qamara Elaceran",
        "Kylantha Magmaer",
        "Daratrine Vaquinal",
        "Dirue Vabanise",
        "Chamylla Chaetumal",
        "Syndra Balceran",
        "Lazziar Gengwyn",
        "Phyrra Jogella",
        "Phyrra Beikian",
        "Wirenth Roxisys",
        "Marlevaur Balkian",
        "Lafarallin Yesxidor",
        "Goren Perralei",
        "Raibyn Inaphyra",
        "Aymer Aezeiros",
        "Ilvisar Herkalyn",
        "Ryfon Beiven",
        "Tiarsus Eilhorn",
        "Illitran Gremaris",
        "Qamara Reymaer",
        "Shanyrria Jopeiros",
        "Falenas Sarsatra",
        "Lierin Ilimys",
        "Symania Torcan",
        "Burolia Adfina",
        "Chalsarda Elvalur",
        "Phelorna Krislen",
        "Dialyiah Loraydark",
        "Yralissa Leolee"]
}