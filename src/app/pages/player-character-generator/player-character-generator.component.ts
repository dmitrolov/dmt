import {Component, OnInit} from '@angular/core';
import {PlayerCharacter} from '../player-character-page/playerCharacter';

@Component({
  selector: 'app-player-character-generator',
  templateUrl: './player-character-generator.component.html',
  styleUrls: ['./player-character-generator.component.scss']
})
export class PlayerCharacterGeneratorComponent implements OnInit {
  playerCharacter: PlayerCharacter;
  private formTabsOptions: number = 0;
  testOptions = [
    {value: 'djgherkgkusejrgskerjhfgsjhefg', text: 'name1'},
    {value: 'aslfajhkbrflabhwekjhabfkrhfb', text: 'name2'},
    {value: 'value3', text: 'name3'}
  ];

  constructor() {
    this.playerCharacter = new PlayerCharacter();
  }

  ngOnInit() {

  }

  setCharacter() {
    console.log(this.playerCharacter);
  }
  switchTab(i: number) {
    this.formTabsOptions += i;
    if (this.formTabsOptions < 0) { this.formTabsOptions = 0; }
    if (this.formTabsOptions > 6) { this.formTabsOptions = 6; }
  }

}
