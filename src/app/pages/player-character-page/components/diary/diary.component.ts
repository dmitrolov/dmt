import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacter} from '../../../../../assets/data/character/playerCharacter';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  @Input() currentUser: PlayerCharacter;
  constructor() { }

  ngOnInit() {
  }

}
