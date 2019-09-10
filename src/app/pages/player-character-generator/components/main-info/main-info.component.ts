import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PlayerCharacter} from '../../../../../assets/data/character/playerCharacter';
import {StoreInterface} from '../../../../store/store.model';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {
  private generatingCharacter: PlayerCharacter;
  constructor(private store: Store<StoreInterface>) {
    store.subscribe((character) => {
      this.generatingCharacter = character.character;
    });
  }

  ngOnInit() {
  }

}
