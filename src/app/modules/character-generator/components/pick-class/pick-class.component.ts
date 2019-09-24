import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';
import {Character} from '../../../../models/character/character.model';
import {CharacterProficiency} from '../../../../models/character/about/components/character-proficiency.model';
import {CharacterClassData} from '../../../../models/mechanics/character-class.data';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html',
  styleUrls: ['./pick-class.component.scss']
})
export class PickClassComponent implements OnInit {
  public classList = CharacterClassData;
  public generatingCharacter: Character;

  constructor(private store: Store<StoreInterface>) {
    store.subscribe((character) => {
      this.generatingCharacter = character.character;
    });
  }

  ngOnInit() {
  }
  onClassInParentComponentSet(value: boolean) {
    this.generatingCharacter.about.info.classes[0].name = String(value);
    this.generatingCharacter.about.info.classes[0].level = 1;
  }
  saveClass() {
    this.classList.map((charClass) => {
      if (this.generatingCharacter.about.info.classes[0].name === charClass.id) {
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
    for (const proficiencyKey of Object.keys(proficiency)) {
      proficiencyAttributes.push(proficiencyKey);
    }
    proficiencyAttributes.forEach((attribute) => {
      proficiency[attribute].forEach((value => {
        character.about.proficiency[attribute].push(value);
      }));
    });
  }

}
