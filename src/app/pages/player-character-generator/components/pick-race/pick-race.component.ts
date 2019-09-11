import { Component, OnInit } from '@angular/core';
import {PlayerCharacterModel} from '../../../../../assets/data/character/playerCharacter.model';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';
import {racesList} from '../../../../../assets/data/character/racesList';

@Component({
  selector: 'app-pick-race',
  templateUrl: './pick-race.component.html',
  styleUrls: ['./pick-race.component.scss']
})
export class PickRaceComponent implements OnInit {
  private racesList = racesList;
  private generatingCharacter: PlayerCharacterModel;
  constructor(private store: Store<StoreInterface>) {
    store.subscribe((character) => {
      this.generatingCharacter = character.character;
    });
  }

  ngOnInit() {
  }

}
