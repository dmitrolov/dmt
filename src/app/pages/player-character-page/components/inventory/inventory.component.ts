import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacterModel} from '../../../../../assets/data/character/playerCharacter';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() currentUser: PlayerCharacterModel;
  constructor() { }

  ngOnInit() {
  }

}
