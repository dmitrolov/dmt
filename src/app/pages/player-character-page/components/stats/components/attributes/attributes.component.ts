import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacter} from '../../../../../../../assets/data/character/playerCharacter';
import attributesOptions from './attributesOptions';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../../../store/store.model';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  private attributesOptions = attributesOptions;
  private currentUser: PlayerCharacter;
  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe((test) => {
      console.log('[Attributes component store subscribe]', test);
      this.currentUser = test.character;
    });
  }

  ngOnInit() {

  }

  getAttributeModifier(attribute: number) {
    const result = Math.floor(attribute / 2) - 5;
    let view: string = result.toString();
    if (result > 0) {
      view = `+${result}`;
    }
    return view;
  }
}
