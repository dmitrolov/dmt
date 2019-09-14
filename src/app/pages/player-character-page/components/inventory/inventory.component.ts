import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';
import {EquipmentData} from '../../../../models/equipment/equipment.data';
import {Item} from '../../../../models/equipment/item/item.model';
import {Character} from '../../../../models/character/character.model';
import {FirebaseService} from '../../../../core/firebase/firebase.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  private allItems: Item[] = EquipmentData;
  public equipment: {item: Item, count: number}[] = [];
  private currentUser: Character;

  constructor(
    private store: Store<StoreInterface>,
    private db: FirebaseService,
    ) {
    this.store.subscribe((storeItem) => {
      this.currentUser = storeItem.character;
    });
  }

  ngOnInit() {
    this.currentUser.equipment.forEach((characterItem) => {
      this.db.getItem(characterItem.value).subscribe((element: Item) => {
        this.equipment.push({item: element, count: characterItem.count});
      });

    });

    // this.db.getItem();
  }
  addItems() {
    this.allItems.forEach((item) => {
      this.db.setItem(item);
    });
  }
}
