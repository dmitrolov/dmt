import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';
import {ItemData} from '../../../../models/item/item.data';
import {Item} from '../../../../models/item/item.model';
import {Character} from '../../../../models/character/character.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  private allItems: Item[] = ItemData;
  private currentUser: Character;
  constructor(private store: Store<StoreInterface>) {
    this.store.subscribe((storeItem) => {
      this.currentUser = storeItem.character;
    });
  }

  ngOnInit() {this.currentUser.equipment.forEach((item) => {
    console.log(item);
  });
  }

}
