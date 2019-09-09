import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacterInterface} from '../../../../../../data/playerCharacterInterface';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../../../store/store.model';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  private currentUser: PlayerCharacterInterface;

  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe((test) => {
      console.log('[General info component store subscribe]', test);
      this.currentUser = test.character;
    });
  }

  ngOnInit() {
  }

}
