import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-character-generator',
  templateUrl: './player-character-generator.component.html',
  styleUrls: ['./player-character-generator.component.scss']
})
export class PlayerCharacterGeneratorComponent implements OnInit {

  private params: string;
  value: string;

  constructor() {}

  ngOnInit() {
  }

  setCharacter() {
    this.params = 'asd';
    console.log(this);
    console.log(this.value);
  }

}
