import {Component, OnInit} from '@angular/core';
import {PlayerCharacter} from '../../../../../assets/data/character/playerCharacter.model';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';
import {CharacterClassesList} from '../../../../../assets/data/character/info/character.class.model';
import {CharacterProficiency} from '../../../../../assets/data/character/info/character.proficiency.model';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html',
  styleUrls: ['./pick-class.component.scss']
})
export class PickClassComponent implements OnInit {
  private classList = CharacterClassesList;
  private generatingCharacter: PlayerCharacter;

  constructor(private store: Store<StoreInterface>) {
    store.subscribe((character) => {
      this.generatingCharacter = character.character;
    });
  }

  ngOnInit() {
  }

  saveClass() {
    this.classList.map((charClass) => {
      if (this.generatingCharacter.characterInfo.mainInfo.classes[0].name === charClass.value) {
        console.log('class saved');
        // Save function
        this.setProficiency(this.generatingCharacter, charClass.proficiency);
        const effectsAttributes = ['savingThrows', 'resistance', 'immunity'];
        effectsAttributes.forEach((attribute) => {
          charClass.effects[attribute].forEach((value) => {
            this.generatingCharacter.characterInfo.effects[attribute].push(value);
          });
        });
        charClass.equipment.forEach((item) => {
          this.generatingCharacter.inventory.push(item);
        });
      }
    });
  }

  setProficiency(character: PlayerCharacter, proficiency: CharacterProficiency) {
    const proficiencyAttributes: string[] = [];
    // tslint:disable-next-line:forin
    for (const proficiencyKey in proficiency) {
      proficiencyAttributes.push(proficiencyKey);
    }
    proficiencyAttributes.forEach((attribute) => {
      proficiency[attribute].forEach((value => {
        character.characterInfo.proficiency[attribute].push(value);
      }));
    });
  }

}
