import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreInterface} from '../../../../store/store.model';
import {Item} from '../../../../models/equipment/item/item.model';
import {Character} from '../../../../models/character/character.model';
import {FirebaseService} from '../../../../core/firebase/firebase.service';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PlayerEquipmentView extends Item {
  count: number;
  name: string;
}
let equipmentView: PlayerEquipmentView[] = [];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
  public currentUser: Character;
  searchingItem: string;
  displayedColumns: string[] = ['name', 'count', 'weight', 'cost'];
  dataSource = new MatTableDataSource(equipmentView);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // private allItems: Item[] = EquipmentData;

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
        equipmentView.push({...element, count: characterItem.count, name: element.title.ru.toString()});
        this.dataSource.sort = this.sort;
      });
    });
  }
  ngOnDestroy(): void {
    equipmentView = [];
  }

  addItems() {
    // this.allItems.forEach((item) => {
    //   this.db.setItem(item);
    // });
  }
}
