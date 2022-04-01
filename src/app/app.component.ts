import { Component, OnInit } from '@angular/core';
import { Ability } from './model/ability';
import { ICharacter } from './model/icharacter.interface';
import { classes } from './model/classes/classes';
import { ClassName } from './model/classes/classname.enum';
import IClass from './model/classes/iclass.interface';
import { AbilityName, IAbilities } from './model/iabilities.interface';
import { ISavingThrows } from './model/isaving-throws.interface';
import { IRace } from './model/races/irace.interface';
import { RaceName } from './model/races/racename.enum';
import { races } from './model/races/races';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { magicUserSpells } from './model/spells';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bfrpgcg';

  abilities!: IAbilities;
  character!: ICharacter;
  name: string = '';
  genRandomName: boolean = true;
  characterForm!: FormGroup;
  spellForm!: FormGroup;
  magicUserSpells = magicUserSpells;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      raceFC: [''],
      classFC: ['']
    })
    this.spellForm = this.fb.group({
      spellFC: [magicUserSpells[0]],
    })
    this.genNewCharacter();
  }

  genNewCharacter(): void {
    this.genAbilities();
    this.genCharacter();
    this.characterForm.get('raceFC')?.setValue(this.character.race, {emitViewToModelChange: false});
    this.characterForm.get('classFC')?.setValue(this.character.characterClass, {emitViewToModelChange: false});
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

  private genName(race: IRace): void {
    this.name = race.names[Math.floor(Math.random() * race.names.length)];
  }

  setStarterSpell(e: any): void {
    if (this.character.characterClass.spells) {
      this.character.characterClass.spells[1] = e.target.value;
    }
  }

  // get all possible races for the rolled abilities
  getRaces(): IRace[] {
    var possibleRaces: IRace[] = [];
    for (var race of races) {
      var valid = true;
      for (var req in race.abilityRequirements) {
        // check if requirements are met: a positive requirement value means the score needs to be higher or equal
        if (race.abilityRequirements[req] >= 0 && race.abilityRequirements[req] > this.abilities[req].score) {
          valid = false;
          //  a negative requirement value indicates that the score has to be lower or equal
        } else if (race.abilityRequirements[req] < 0 && race.abilityRequirements[req] * -1 < this.abilities[req].score) {
          valid = false;
        }
      }
      if (valid) {
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
        var valid = true;
        for (var req in cc.abilityRequirements) {
          // check if requirements are met: a positive requirement value means the score needs to be higher or equal
          if (cc.abilityRequirements[req] >= 0 && cc.abilityRequirements[req] > this.abilities[req].score) {
            valid = false;
            //  a negative requirement value indicates that the score has to be lower or equal
          } else if (cc.abilityRequirements[req] < 0 && cc.abilityRequirements[req] * -1 < this.abilities[req].score) {
            valid = false;
          }
        }
        if (valid) {
          possibleClasses.push(cc);
        }
      }
    }
    return possibleClasses;
  }

  // calculate the saving throws from class values and race modifiers
  private calcSavingThrows(characterClass: IClass, race: IRace): ISavingThrows {
    var savingThrows = Object.assign({}, characterClass.savingThrow);
    for (var mod in race.savingThrowMods) {
      savingThrows[mod] -= race.savingThrowMods[mod];
    }
    return savingThrows;
  }

  // generate and set a full character
  genCharacter(race?: IRace, characterClass?: IClass): void {

    if (!race) {
      var possibleRaces = this.getRaces();
      race = possibleRaces[Math.floor(Math.random() * possibleRaces.length)];
    }

    if (!characterClass) {
      var possibleClasses = this.getCharacterClasses(race);
      characterClass = possibleClasses[Math.floor(Math.random() * possibleClasses.length)];
    }


    if (this.name == '' || this.genRandomName) {
      this.genName(race);
    }

    // Use class hd for HP generation, but cap halfling hd at 6
    var hd = race.name == RaceName.Halfling && characterClass.hd > 6 ? 6 : characterClass.hd

    this.character = {
      name: this.name,
      race: race,
      characterClass: characterClass,
      hp: this.dieRoll(1, hd),
      ac: this.abilities[AbilityName.DEXTERITY].mod >= 1 ? this.abilities[AbilityName.DEXTERITY].mod : 0,
      ab: characterClass.ab,
      level: 1,
      abilities: this.abilities,
      savingThrows: this.calcSavingThrows(characterClass, race),
      gold: this.genGold(),
    }
  }
}