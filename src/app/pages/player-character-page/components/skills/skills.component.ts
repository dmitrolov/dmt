import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacterModel} from '../../../../../assets/data/character/playerCharacter';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() currentUser: PlayerCharacterModel;
  constructor() { }

  ngOnInit() {
  }

}
