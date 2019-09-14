import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';
import {CharacterClassesList} from '../../../../models/character/about/character.class.model';
import {CharacterProficiency} from '../../../../models/character/about/components/character.proficiency.model';
import {Character} from '../../../../models/character/character.model';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html',
  styleUrls: ['./pick-class.component.scss']
})
export class PickClassComponent implements OnInit {
  private classList = CharacterClassesList;
  private generatingCharacter: Character;

  constructor(private store: Store<StoreInterface>) {
    store.subscribe((character) => {
      this.generatingCharacter = character.character;
    });
  }

  ngOnInit() {
  }

  saveClass() {
    this.classList.map((charClass) => {
      if (this.generatingCharacter.about.info.classes[0].name === charClass.value) {
        console.log('class saved');
        // Save function
        this.setProficiency(this.generatingCharacter, charClass.proficiency);
        const effectsAttributes = ['savingThrows', 'resistance', 'immunity'];
        effectsAttributes.forEach((attribute) => {
          charClass.effects[attribute].forEach((value) => {
            this.generatingCharacter.about.effects[attribute].push(value);
          });
        });
        charClass.equipment.forEach((item) => {
          this.generatingCharacter.equipment.push(item);
        });
      }
    });
  }

  setProficiency(character: Character, proficiency: CharacterProficiency) {
    const proficiencyAttributes: string[] = [];
    // tslint:disable-next-line:forin
    for (const proficiencyKey in proficiency) {
      proficiencyAttributes.push(proficiencyKey);
    }
    proficiencyAttributes.forEach((attribute) => {
      proficiency[attribute].forEach((value => {
        character.about.proficiency[attribute].push(value);
      }));
    });
  }

}
