import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayerCharacter} from '../../../../../assets/data/character/playerCharacter.model';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';

@Component({
  selector: 'app-character-generator-select',
  templateUrl: './character-generator-select.component.html',
  styleUrls: ['./character-generator-select.component.scss']
})
export class CharacterGeneratorSelectComponent implements OnInit {
  @Input() options;
  @Input() switchingAttribute;
  @Output() raceInParentComponentSet = new EventEmitter<boolean>();

  ngOnInit() {
  }

  onChange($event: any) {
    console.log('$event', $event);
    console.log('this.switchingAttribute', this.switchingAttribute);
    console.log('this.raceInParentComponentSet', this.raceInParentComponentSet);
    this.raceInParentComponentSet.emit(this.switchingAttribute);
  }
}
