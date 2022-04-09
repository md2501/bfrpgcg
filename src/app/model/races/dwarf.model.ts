
import { AbilityName } from "../iabilities.interface";
import { ClassName } from "../classes/classname.enum";
import { IRace } from "./irace.interface";
import { RaceName } from "./racename.enum";
import { SavingThrowName } from "../isaving-throws.interface";

const DWARF_SPECIFICS_KEY = "game.races.dwarf.specifics"

export class Dwarf implements IRace {
    raceName = RaceName.Dwarf;
    // specialAbilities = ["darkvision 60'", "detect slanting passages, traps, shifting walls, new construction: 2/6"];
    specialAbilities = [
        { 
            translationKey: `${DWARF_SPECIFICS_KEY}.specialAbilities.darkvision`, 
            params: { VALUE: 60 }
        },
        { 
            translationKey: `${DWARF_SPECIFICS_KEY}.specialAbilities.detectSurroundings`, 
            params: { VALUE: "2/6" }
        }
    ];
    abilityRequirements = { [AbilityName.CONSTITUTION]: 9, [AbilityName.CHARISMA]: -17 };
    classes = [ClassName.Cleric, ClassName.Fighter, ClassName.Thief];
    // weaponRestrictions = ["may not use Large weapons more than four feet in length"];
    weaponRestrictions = [
        `${DWARF_SPECIFICS_KEY}.weaponRestrictions.noLargeWeapons`
    ];
    savingThrowMods = { [SavingThrowName.POISON]: 4, [SavingThrowName.WANDS]: 4, [SavingThrowName.PARALYSIS]: 4, [SavingThrowName.SPELLS]: 4, [SavingThrowName.DRAGONBREATH]: 3 };
    names = ["Jakwohilda Redstone",
        "Doudmeaginn Dimbrand",
        "Rutobera Coalmantle",
        "Nobrela Hammergranite",
        "Finwadrid Onyxmace",
        "Groovegret Bottlebasher",
        "Grazzeatelyn Emberbrewer",
        "Bhargolda Barbedshield",
        "Glarfatain Icehood",
        "Themrangrid Wraithbane",
        "Vorhurim Ashmaul",
        "Stroghak Metalspine",
        "Votruid Onyxbuckle",
        "Nozulim Hillpike",
        "Hummir Mudspine",
        "Durikrad Graysunder",
        "Elrhoud Graniteminer",
        "Hutor Undershield",
        "Dwongraed Deephood",
        "Narrotir Blessedgrog",
        "Krozuilyn Cragborn",
        "Toremwatrude Beastforge",
        "Janouren Magmabrewer",
        "Umikgrorra Leatherbelly",
        "Nognilynn Bloodheart",
        "Gratreadrid Caskfoot",
        "Nuraddaere Warmcloak",
        "Skoggaetrud Axebraid",
        "Dhussoustr Bonehood",
        "Ellehilda Onyxchest",
        "Nukkoug Goldmantle",
        "Kamnod Anvilaxe",
        "Tuteam Stormflayer",
        "Mastronlir Longflayer",
        "Yuthaeck Grayfury",
        "Werfith Oakenbreaker",
        "Snardreak Stormhelm",
        "Vatous Gravelmaster",
        "Dhukgrorli Coalgut",
        "Atmag Grimforged",
        "Burgobelynn Kragview",
        "Lobroubella Beastarm",
        "Yasdrotalin Anvilview",
        "Dalozigret Ironshield",
        "Forbaetrud Berylbelt",
        "Aratrada Cavebraids",
        "Thramrulin Bonebelt",
        "Krotmitelin Cavebelt",
        "Eltribera Smeltminer",
        "Gloribreadrid Oakenblade",
        "Thiddorlun Cragbender",
        "Yarhaem Bronzeview",
        "Kherfom Strongfall",
        "Grookel Battlesword",
        "Kimdoick Smeltblade",
        "Yurgraek Bronzegut",
        "Fokhud Shadowminer",
        "Kralgrumlin Largefinger",
        "Araggout Ashview",
        "Nuburim Cavehead",
        "Godrataine Magmabreaker",
        "Brofubelyn Dimmaul",
        "Ordrealine Platemaker",
        "Thaggatrud Lightgrog",
        "Throrgroubela Alebuster",
        "Snathaebela Ashgrog",
        "Nurfida Longhead",
        "Hurfitain Chaosdigger",
        "Nefetalin Barrelmaster",
        "Rukheani Wyvernsunder",
        "Dalolgroug Caskfury",
        "Brusdrid Twilightfoot",
        "Elkgrac Earthbranch",
        "Arardud Blazingjaw",
        "Khudruid Brickmaster",
        "Rundred Smeltbow",
        "Hozumir Smeltbrow",
        "Ofrak Deepbelt",
        "Groodgraic Orchand",
        "Glastok Honorbranch",
        "Jorsulynn Longfinger",
        "Lomditryd Barrelborn",
        "Kukdrebelynn Goldbranch",
        "Khudaginn Snowflayer",
        "Dwotdrunelyn Shadowbrew",
        "Demdeada Aleheart",
        "Kirfutalin Platehood",
        "Reisdrenelynn Orcfury",
        "Snarfetelin Warmhood",
        "Thagnuginn Metalview",
        "Vasgrirlum Copperblade",
        "Thrargrag Wyvernmaster",
        "Bhavat Hardchest",
        "Sakroth Dragonbreaker",
        "Elbrolin Greatbrand",
        "Alfokhuth Ingothood",
        "Dargrum Icegranite",
        "Dorakdrok Cragchest",
        "Siggumlir Coalbelt",
        "Thradomli Brownbeard"];
}