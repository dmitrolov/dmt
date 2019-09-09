import {Component, OnInit} from '@angular/core';
import {PlayerCharacterInterface} from '../../data/playerCharacterInterface';

@Component({
  selector: 'app-player-character-generator',
  templateUrl: './player-character-generator.component.html',
  styleUrls: ['./player-character-generator.component.scss']
})
export class PlayerCharacterGeneratorComponent implements OnInit {
  playerCharacter: PlayerCharacterInterface;
  private formTabsOptions: number = 0;
  testOptions = [
    {value: 'djgherkgkusejrgskerjhfgsjhefg', text: 'name1'},
    {value: 'aslfajhkbrflabhwekjhabfkrhfb', text: 'name2'},
    {value: 'value3', text: 'name3'}
  ];

  constructor() {
    // this.playerCharacter = new PlayerCharacterInterface();
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
