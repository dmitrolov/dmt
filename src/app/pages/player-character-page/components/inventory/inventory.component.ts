import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacter} from '../../../../../assets/data/character/playerCharacter.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() currentUser: PlayerCharacter;
  constructor() { }

  ngOnInit() {
  }

}
