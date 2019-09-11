import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacterModel} from '../../../../../assets/data/character/playerCharacter';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  @Input() currentUser: PlayerCharacterModel;
  constructor() { }

  ngOnInit() {
  }

}
