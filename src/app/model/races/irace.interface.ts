import { AbilityName, IAbilities } from "../iabilities.interface";
import { ClassName } from "../classes/classname.enum";
import { RaceName } from "./racename.enum";
import { SavingThrowName } from "../isaving-throws.interface";

/**
 * Represents a special ability which is displayed by calling a translation function
 * 
 * @field translationKey - They key of the string in the translation file
 * @field params - Params that are given to the translation function. They will be interpolated if they exist in the translation template
 * 
 * ---
 * Example Translation File:
 * // en.json
 * {
 *   "my": {
 *     "nested": {
 *       "key": "{PERSON} rides a bike"
 *     }
 *   }
 * }
 * 
 * // Special Ability
 * const ability: SpecialAbility = {
 *   translationKey: "my.nested.key",
 *   params: { PERSON: "Micheal" }
 * }
 * 
 * // Translation in template
 * <div *transloco="let t">
 *   <!-- Produces: "Micheal rides a bike" -->
 *   {{ t(ability.translationKey, ability.params) }}
 * </div> 
 */
interface SpecialAbility {
    translationKey: string
    params?: any // Should actually be { [key: string]: string | number }, but this throws errors if there are SpecialAbility[] with different amount of params
}

export interface IRace {
    name: RaceName;
    classes: ClassName[];
    abilityRequirements: {[ability in AbilityName as string]: number};
    weaponRestrictions: string[];
    specialAbilities: SpecialAbility[]; // TODO: Find appropriate type for translations
    savingThrowMods: {[save in SavingThrowName as string]: number};
    names: string[];
}