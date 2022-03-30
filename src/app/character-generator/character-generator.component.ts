import { Component, OnInit } from '@angular/core';
import { Ability } from '../model/ability';

@Component({
  selector: 'app-character-generator',
  templateUrl: './character-generator.component.html',
  styleUrls: ['./character-generator.component.css']
})
export class CharacterGeneratorComponent implements OnInit {

  abilities!: { [ability: string]: Ability; };

  constructor() { }

  ngOnInit(): void {
    this.abilities = this.genAbilities();
  }

  // roll a die a number of times and return the sum
  private dieRoll(rolls: number, sides: number): number {
    var res: number = 0;
    for (var i = 0; i < rolls; i++) {
      res += Math.floor(Math.random() * sides + 1)
    }
    return res;
  }

  // generate all 6 abilities
  private genAbilities(): { [ability: string]: Ability } {
    return { strength: new Ability(this.dieRoll(3, 6)), intelligence: new Ability(this.dieRoll(3, 6)), wisdom: new Ability(this.dieRoll(3, 6)), dexterity: new Ability(this.dieRoll(3, 6)), constitution: new Ability(this.dieRoll(3, 6)), charisma: new Ability(this.dieRoll(3, 6)) };
  }

}
