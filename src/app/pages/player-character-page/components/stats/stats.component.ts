import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacter} from '../../playerCharacter';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() currentUser: PlayerCharacter;
  private menuOptions = {
    currentTab: 'general-info',
    menuItems: [
      {tab: 'general-info', src: 'assets/img/character-page/general-info.png',  alt: 'menu image'},
      {tab: 'attributes',   src: 'assets/img/character-page/attributes.png',    alt: 'menu image'},
      {tab: 'proficiency',  src: 'assets/img/character-page/proficiency.png',   alt: 'menu image'},
      {tab: 'description',  src: 'assets/img/character-page/description.png',   alt: 'menu image'}
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
