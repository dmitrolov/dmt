import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacterInterface} from '../../../../../../data/playerCharacterInterface';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  @Input() currentUser: PlayerCharacterInterface;
  constructor() { }

  ngOnInit() {
  }

}
