import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ability } from './model/ability.model';
import { ICharacter } from './model/icharacter.interface';
import { classes } from './model/classes/classes';
import { ClassName } from './model/classes/classname.enum';
import IClass from './model/classes/iclass.interface';
import { AbilityName, IAbilities } from './model/iabilities.interface';
import { ISavingThrows, SavingThrowName } from './model/isaving-throws.interface';
import { IRace } from './model/races/irace.interface';
import { RaceName } from './model/races/racename.enum';
import { races } from './model/races/races';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { magicUserSpells, Spell } from './model/spells';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../print.css']
})
export class AppComponent implements OnInit {
  title = 'bfrpgcg';

  abilities!: IAbilities;
  character!: ICharacter;
  name: string = '';
  genRandomName: boolean = true;
  characterForm!: FormGroup;
  spellForm!: FormGroup;
  spellArray!: FormArray;
  @ViewChild('exportcontent') exportcontent!: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      levelFC: [1],
      raceFC: [''],
      classFC: ['']
    })
    this.spellForm = this.fb.group({
      spellArray: this.fb.array([])
    });
    this.genNewCharacter();
  }

  genNewCharacter(): void {
    this.genAbilities();
    this.genCharacter(undefined, undefined, this.characterForm.get('levelFC')?.value);
    this.characterForm.get('raceFC')?.setValue(this.character.race, { emitViewToModelChange: false });
    this.characterForm.get('classFC')?.setValue(this.character.characterClass, { emitViewToModelChange: false });
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
    if (this.character.characterClass.spellProgression) {
      this.character.characterClass.spellProgression[1] = e.target.value;
    }
  }

  private setSpells(): void {
    if (this.character.characterClass.spells && this.character.characterClass.spellProgression) {
      var spells: Spell[][] = [];
      for (var i = 0; i < this.character.characterClass.spellProgression[this.character.level].length; i++) {
        spells.push([]);
      }
      for (var i = 0; i < (this.spellForm.get('spellArray') as FormArray).controls.length; i++) {

        var selected = (this.spellForm.get('spellArray') as FormArray).controls[i].value as boolean[];

        // get the selected spells and add them to our characters spells
        for (var j = 0; j < selected.length; j++) {
          if (selected[j]) {
            spells[i].push(this.character.characterClass.spells[i][j]);
          }
        }
      }
      this.character.spells = spells;
    }
  }

  checkSpells(): void {
    for (var i = 0; i < (this.spellForm.get('spellArray') as FormArray).controls.length; i++) {

      var selected = (this.spellForm.get('spellArray') as FormArray).controls[i].value as boolean[];

      // disable all unselected checkboxes if max amount of spells for spelllevel has been selected
      if (this.character.characterClass.spellProgression && selected.reduce((a, v) => (v == true ? a + 1 : a), 0) >= this.character.characterClass.spellProgression[this.character.level][i]) {
        for (var fc of ((this.spellForm.get('spellArray') as FormArray).controls[i] as FormArray)['controls']) {
          if (!fc.value) {
            fc.disable();
          }
        }
      } else {
        for (var fc of ((this.spellForm.get('spellArray') as FormArray).controls[i] as FormArray)['controls']) {
          fc.enable();
        }
      }
    }
  }

  private createNewSpellSelect(): FormControl {
    return new FormControl({ spellSelect: [''] });
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
  private calcSavingThrows(characterClass: IClass, race: IRace, level: number): { [key in SavingThrowName as string]: number } {
    var savingThrows: { [key in SavingThrowName as string]: number } = {};
    for (var save in characterClass.savingThrow) {
      savingThrows[save] = characterClass.savingThrow[save][Math.floor(level / 2)] - (race.savingThrowMods[save] ?? 0);
    }
    return savingThrows;
  }

  // generate pdf from html
  genPDF() {
    window.print()
  }

  // generate and set a full character
  genCharacter(race?: IRace, characterClass?: IClass, level: number = 1): void {

    // get a random race suitable for the abilities if none given
    if (!race) {
      var possibleRaces = this.getRaces();
      race = possibleRaces[Math.floor(Math.random() * possibleRaces.length)];
    }

    // get a random characterClass suitable for the abilities and race if none given
    if (!characterClass) {
      var possibleClasses = this.getCharacterClasses(race);
      characterClass = possibleClasses[Math.floor(Math.random() * possibleClasses.length)];
    }

    // Use a random name?
    if (this.name == '' || this.genRandomName) {
      this.genName(race);
    }

    // Use class hd for HP generation, but cap halfling hd at 6
    var hd = race.name == RaceName.Halfling && characterClass.hd > 6 ? 6 : characterClass.hd

    // Get amount of hd rolled and hp class bonus for hp gen
    var rolls = level < 9 ? level : 9;
    var hpBonus = characterClass.hpBonus[level] ?? 0;

    // Make sure hp are at least 1
    var hp = this.dieRoll(rolls, hd) + hpBonus + this.abilities[AbilityName.CONSTITUTION].mod;
    hp = hp < 1 ? 1 : hp;

    // Prepare Spellform if needed
    this.spellForm.controls['spellArray'] = this.fb.array([]);
    if (characterClass.spellProgression && characterClass.spells) {
      for (var i = 0; i < characterClass.spellProgression[level].length; i++) {
        (this.spellForm.get('spellArray') as FormArray).push(new FormArray([]));
        for (var spell of characterClass.spells[i])
          ((this.spellForm.get('spellArray') as FormArray).controls[i] as FormArray).push(new FormControl());
      }
    }

    this.character = {
      name: this.name,
      race: race,
      characterClass: characterClass,
      level: level,
      hp: hp,
      ac: this.abilities[AbilityName.DEXTERITY].mod >= 1 ? this.abilities[AbilityName.DEXTERITY].mod : 0,
      ab: characterClass.ab[level - 1],
      abilities: this.abilities,
      savingThrows: this.calcSavingThrows(characterClass, race, level),
      gold: this.genGold(),
    }
  }
}