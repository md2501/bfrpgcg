import { IRace } from "./irace.interface";
import { ClassName } from "../classes/classname.enum";
import { RaceName } from "./racename.enum";
import { AbilityName } from "../iabilities.interface";
import { SavingThrowName } from "../isaving-throws.interface";

const HALFLING_SPECIFICS_KEY = "game.races.halfling.specifics"

export class Halfling implements IRace {
    raceName = RaceName.Halfling;
    abilityRequirements = { [AbilityName.DEXTERITY]: 9, [AbilityName.STRENGTH]: -17 };
    classes = [ClassName.THIEF, ClassName.CLERIC, ClassName.FIGHTER];
    // weaponRestrictions = ["may not use large weapons", "must wield medium weapons with both hands"];
    weaponRestrictions = [
        `${HALFLING_SPECIFICS_KEY}.weaponRestrictions.noLargeWeapons`,
        `${HALFLING_SPECIFICS_KEY}.weaponRestrictions.mediumWeaponsTwoHanded`,
    ];
    // specialAbilities = ["+1 attack bonus on ranged weapons", "+2 armor class when attacked in melee by creatures larger than man-sized", "+1 initiative", "hide outdoors: 90", "hide indoors: 70"];
    specialAbilities = [
        { 
            translationKey: `${HALFLING_SPECIFICS_KEY}.specialAbilities.rangedWeaponBonus`,
            params: { VALUE: 1 }
        },
        { 
            translationKey: `${HALFLING_SPECIFICS_KEY}.specialAbilities.armorBonus`,
            params: { VALUE: 2 }
        },
        { 
            translationKey: `${HALFLING_SPECIFICS_KEY}.specialAbilities.initiative`,
            params: { VALUE: 1 }
        },
        { 
            translationKey: `${HALFLING_SPECIFICS_KEY}.specialAbilities.hideOutdoors`,
            params: { VALUE: 90 }
        },
        { 
            translationKey: `${HALFLING_SPECIFICS_KEY}.specialAbilities.hideIndoors`,
            params: { VALUE: 70 }
        }
    ];
    savingThrowMods = { [SavingThrowName.POISON]: 4, [SavingThrowName.WANDS]: 4, [SavingThrowName.PARALYSIS]: 4, [SavingThrowName.SPELLS]: 4, [SavingThrowName.DRAGONBREATH]: 3 };
    names = ["Sadoc Whitfoot",
        "Marco Whitbottom",
        "Gunthar Brownlock",
        "Faramir Sandyman",
        "Holman Whitfoot",
        "Magneric Littlefoot",
        "Erchinoald Greenhill",
        "Fulcaire Noakesburrow",
        "Carl Greenhill",
        "Goscelin Townsend",
        "Grimalda Gluttonbelly",
        "Asphodel Longhole",
        "Fastrada Bracegirdle",
        "Joveta Brockhouse",
        "Ingeltrud Proudfoot",
        "Mentha Bottomhill",
        "Rosa Riverhopper",
        "Madelgarda Townsend",
        "May Hornwood",
        "Ultrogotha Boulderhill",
        "Childebert Proudbody",
        "Cottar Twofoot",
        "Ragnfred Barrowes",
        "Chlotar Riverhopper",
        "Uffo Roper",
        "Bernhard Took-Brandybuck",
        "Farabert Lothran",
        "Suger Goodsong",
        "Hamfast Gluttonbelly",
        "Chlodomer Burrowes",
        "Madelgarda Took-Took",
        "Elanor Grubb",
        "Genofeva Sackville",
        "Ermentrudis Underburrow",
        "Mary Knotwise",
        "Hodierna Fallohide",
        "Berthegund Goodbody",
        "Theudechild Hopesinger",
        "Theudelinde Pott",
        "May Bottomhill",
        "Gruffo Hopesinger",
        "Folcard Button",
        "Isembard Clayhanger",
        "Adalbert Burrows",
        "Folcard Baggins",
        "Dagobert Littlefoot",
        "Evroult Harfoot",
        "Suger Harfoot",
        "Zwentibold Puddifoot",
        "Rufus Tinyfoot",
        "Regina Hopesinger",
        "Rothaide Fallohide",
        "Gersvinda Thornburrow",
        "Katherine Goodbody",
        "Cunegonde Headstrong",
        "Leubast Pott",
        "Gisela Wanderfoot",
        "Devin Littlefoot",
        "Alpaide Hayward",
        "Cornelia Bracegirdle",
        "Aigulf Cotton",
        "Magneric Tinyfoot",
        "Britius North-took",
        "Sergius Rumble",
        "Austregisel Bolger-Baggins",
        "Monulph Noakesburrow",
        "Fredegar Brockhouse",
        "Sigibert Gluttonbelly",
        "Haiduc Townsend",
        "Ebroin Sackville-Baggins",
        "Pandora Noakesburrow",
        "Alpais Brandybuck",
        "Donnamira Goodwort",
        "Caitlin Maggot",
        "Pearl Whitbottom",
        "Ellinrat Cutton",
        "Clotilde Wanderfoot",
        "Nantechildis Gamgee",
        "Rotrude Goodbody",
        "Madelgarde Bolger-Baggins",
        "Marachar Leafwalker",
        "Grossman Boulderhill",
        "Priamus Hairyfoot",
        "Otbert Longriver",
        "Nahand Bophin",
        "Sicho Silentfoot",
        "Guntram Pott",
        "Wandregisel Fallohide",
        "Medard Bottomhill",
        "Huebald Wanderfoot",
        "Dora Gammidge",
        "Gundrade Underfoot",
        "Andrea Stoor",
        "Belba Oldbuck",
        "Laura Gardner",
        "Foy Stumbletoe",
        "Berylla Bramblethorn",
        "Shannon Burrows",
        "Tahli Galpsi",
        "Bailey Took-Brandybuck"]
}