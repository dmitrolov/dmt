import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacterInterface} from '../../../../data/playerCharacterInterface';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  @Input() currentUser: PlayerCharacterInterface;
  constructor() { }

  ngOnInit() {
  }

}
