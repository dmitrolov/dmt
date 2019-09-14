import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../../../store/store.model';
import {Character} from '../../../../../../models/character/character.model';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  public currentUser: Character;

  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe((test) => {
      console.log('[General info component store subscribe]', test);
      this.currentUser = test.character;
    });
  }

  ngOnInit() {
  }

}
