import {Component, OnInit} from '@angular/core';
import {PlayerCharacter} from '../../../assets/data/character/playerCharacter';
import {Store} from '@ngrx/store';
import * as CharacterActions from '../../store/characters/characters.actions';
import {StoreInterface} from '../../store/store.model';

@Component({
  selector: 'app-player-character-generator',
  templateUrl: './player-character-generator.component.html',
  styleUrls: ['./player-character-generator.component.scss']
})
export class PlayerCharacterGeneratorComponent implements OnInit {
  generatingCharacter: PlayerCharacter;
  private formTabsOptions = 0;

  constructor(private store: Store<StoreInterface>) {
    this.store.dispatch(new CharacterActions.GetDefaultCharacter());
    this.store.subscribe((characterStore) => {
      this.generatingCharacter = characterStore.character;
    });
  }

  ngOnInit() {

  }

  setCharacter() {
    console.log(this.generatingCharacter);
    this.store.dispatch(new CharacterActions.SetCharacter(this.generatingCharacter));
  }
  switchTab(i: number) {
    this.formTabsOptions += i;
    if (this.formTabsOptions < 0) { this.formTabsOptions = 0; }
    if (this.formTabsOptions > 6) { this.formTabsOptions = 6; }
    this.store.dispatch(new CharacterActions.SetCharacter(this.generatingCharacter));
  }

}
