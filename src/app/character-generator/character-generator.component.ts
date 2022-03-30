import { Component, OnInit } from '@angular/core';
import { AbilityName, IAbilities } from '../model/abilities';
import { Ability } from '../model/ability';
import { ICharacter } from '../model/character.interface';
import { Fighter } from '../model/classes/fighter';
import IClass from '../model/classes/iclass.interface';
import { IRace } from '../model/races/irace.interface';
import { RaceName } from '../model/races/racename.enum';
import { races } from '../model/races/races';

@Component({
  selector: 'app-character-generator',
  templateUrl: './character-generator.component.html',
  styleUrls: ['./character-generator.component.css']
})
export class CharacterGeneratorComponent implements OnInit {

  abilities!: IAbilities;
  character!: ICharacter;

  constructor() { }

  ngOnInit(): void {
    this.genAbilities();
  }

  // roll a die a number of times and return the sum
  private dieRoll(rolls: number, sides: number): number {
    var res: number = 0;
    for (var i = 0; i < rolls; i++) {
      res += Math.floor(Math.random() * sides + 1)
    }
    return res;
  }

  // generate and set all 6 abilities
  genAbilities(): void {
    this.abilities = { [AbilityName.STRENGTH]: new Ability(this.dieRoll(3, 6)), [AbilityName.INTELLIGENCE]: new Ability(this.dieRoll(3, 6)), [AbilityName.WISDOM]: new Ability(this.dieRoll(3, 6)), [AbilityName.DEXTERITY]: new Ability(this.dieRoll(3, 6)), [AbilityName.CONSTITUTION]: new Ability(this.dieRoll(3, 6)), [AbilityName.CHARISMA]: new Ability(this.dieRoll(3, 6)) };
  }

  private genGold(): number {
    return this.dieRoll(3, 6) * 10;
  }

  /*setAbilities(abilities: IAbilities): void {
    this.abilities = abilities;
  }*/

  //TODO: return a race appropriate fantasy name (maybe provided by service)
  private genName(race: RaceName): string {
    return "Atlas Doe"
  }

  private getRaces(): IRace[] {
    var possibleRaces: IRace[] = [];
    for (var race of races) {
      var valid = true;
      for (var req in race.abilityRequirements)
        if (race.abilityRequirements[req] >= 0 && !(race.abilityRequirements[req] > this.abilities[req].score)) {
          valid = false;
        } else if (race.abilityRequirements[req] < 0 && !(race.abilityRequirements[req] < this.abilities[req].score)) {
          valid = false
        }
        if (valid){
          possibleRaces.push(race);
        }
    }
    return possibleRaces;
  }

  private genCharacterClass(race: IRace): IClass {
    return new Fighter;
  }

  // generate a full character
  genCharacter(race?: IRace, characterClass?: IClass, name?: string): ICharacter {
    race = race ?? this.getRaces()[Math.floor(Math.random() * this.getRaces().length)];
    characterClass = characterClass ?? this.genCharacterClass(race);
    return {
      name: name ?? this.genName(race.name),
      race: race,
      characterClass: characterClass,
      ac: this.abilities[AbilityName.DEXTERITY].mod >= 1 ? this.abilities[AbilityName.DEXTERITY].mod : 0,
      ab: characterClass.ab,
      abilities: this.abilities,
      gold: this.genGold(),
    }
  }
}
