import { Component, OnInit } from '@angular/core';
import { AbilityName, IAbilities } from '../model/abilities';
import { Ability } from '../model/ability';
import { ICharacter } from '../model/character.interface';
import { classes } from '../model/classes/classes';
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

  // generate and set all 6 abilities and make sure we are eligible for at least one class
  genAbilities(): void {
    do {
      this.abilities = { [AbilityName.STRENGTH]: new Ability(this.dieRoll(3, 6)), [AbilityName.INTELLIGENCE]: new Ability(this.dieRoll(3, 6)), [AbilityName.WISDOM]: new Ability(this.dieRoll(3, 6)), [AbilityName.DEXTERITY]: new Ability(this.dieRoll(3, 6)), [AbilityName.CONSTITUTION]: new Ability(this.dieRoll(3, 6)), [AbilityName.CHARISMA]: new Ability(this.dieRoll(3, 6)) };
    } while (this.abilities[AbilityName.STRENGTH].score < 9 && this.abilities[AbilityName.WISDOM].score < 9 && this.abilities[AbilityName.INTELLIGENCE].score < 9 && this.abilities[AbilityName.DEXTERITY].score < 9)
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

  // get all possible races for the rolled abilities
  getRaces(): IRace[] {
    var possibleRaces: IRace[] = [];
    for (var race of races) {
      for (var req in race.abilityRequirements)
        // check if requirements are met: a positive requirement value means the score needs to be higher or equal
        if (!(race.abilityRequirements[req] >= 0 && !(race.abilityRequirements[req] > this.abilities[req].score))
          //  a negative requirement value indicates that the score has to be lower or equal
          && !((race.abilityRequirements[req] < 0 && !(race.abilityRequirements[req] < this.abilities[req].score)))) {
          possibleRaces.push(race);
        }
    }
    return possibleRaces;
  }

  // get all possible character classes for the rolled abilites and given race
  getCharacterClasses(race: IRace): IClass[] {
    var possibleClasses: IClass[] = [];
    for (var cc of classes) {
      if (race.classes.includes(cc.name)) {
        for (var req in cc.abilityRequirements) {
          // check if requirements are met: a positive requirement value means the score needs to be higher or equal
          if (!(cc.abilityRequirements[req] >= 0 && !(cc.abilityRequirements[req] > this.abilities[req].score))
            //  a negative requirement value indicates that the score has to be lower or equal
            && !((cc.abilityRequirements[req] < 0 && !(cc.abilityRequirements[req] < this.abilities[req].score)))) {
            possibleClasses.push(cc);
          }

        }
      }
    }
    return possibleClasses;
  }

  // generate a full character
  genCharacter(race?: IRace, characterClass?: IClass, name?: string): ICharacter {

    if (!race) {
      var possibleRaces = this.getRaces();
      race = possibleRaces[Math.floor(Math.random() * possibleRaces.length)];
    }

    if (!characterClass) {
      var possibleClasses = this.getCharacterClasses(race);
      characterClass = possibleClasses[Math.floor(Math.random() * possibleClasses.length)];
    }

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
