import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacterInterface} from '../../../../data/playerCharacterInterface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() currentUser: PlayerCharacterInterface;
  constructor() { }

  ngOnInit() {
  }

}
