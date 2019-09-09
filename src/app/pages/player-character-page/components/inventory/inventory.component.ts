import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacterInterface} from '../../../../data/playerCharacterInterface';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() currentUser: PlayerCharacterInterface;
  constructor() { }

  ngOnInit() {
  }

}
