import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';
import {Character} from '../../../../models/character/character.model';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {
  private generatingCharacter: Character;
  constructor(private store: Store<StoreInterface>) {
    store.subscribe((character) => {
      this.generatingCharacter = character.character;
    });
  }

  ngOnInit() {
  }

}
