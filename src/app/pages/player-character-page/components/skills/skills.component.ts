import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacter} from '../../../../../assets/data/character/playerCharacter';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() currentUser: PlayerCharacter;
  constructor() { }

  ngOnInit() {
  }

}
