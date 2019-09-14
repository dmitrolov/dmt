import {Component, Input, OnInit} from '@angular/core';
import attributesOptions from './attributesOptions';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../../../store/store.model';
import {Character} from '../../../../../../models/character/character.model';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  private attributesOptions = attributesOptions;
  private currentUser: Character;
  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe((storeItem) => {
      this.currentUser = storeItem.character;
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
