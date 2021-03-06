import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as CharacterActions from '../../store/characters/characters.actions';
import {StoreInterface} from '../../store/store.model';
import {FirebaseService} from '../../core/firebase/firebase.service';
import {Character} from '../../models/character/character.model';

@Component({
  selector: 'app-character-generator',
  templateUrl: './character-generator.component.html',
  styleUrls: ['./character-generator.component.scss']
})
export class CharacterGeneratorComponent implements OnInit {
  private generatingCharacter: Character;
  public formTabsOptions = 0;

  constructor(
    private store: Store<StoreInterface>,
    private firebaseService: FirebaseService
  ) {
    this.store.dispatch(new CharacterActions.GetDefaultCharacter());
    this.store.subscribe((characterStore) => {
      this.generatingCharacter = characterStore.character;
    });
  }

  ngOnInit() {

  }

  setCharacter() {
    console.log(this.generatingCharacter);
    // this.store.dispatch(new CharacterActions.SetCharacter(this.generatingCharacter));
  }

  saveCharacter() {
    this.firebaseService.setPlayerCharacter(this.generatingCharacter);
  }

  switchTab(i: number) {
    this.formTabsOptions += i;
    if (this.formTabsOptions < 0) {
      this.formTabsOptions = 0;
    }
    if (this.formTabsOptions > 6) {
      this.formTabsOptions = 6;
    }
    // this.store.dispatch(new CharacterActions.SetCharacter(this.generatingCharacter));
  }

}
