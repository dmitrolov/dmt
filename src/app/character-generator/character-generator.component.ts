import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-generator',
  templateUrl: './character-generator.component.html',
  styleUrls: ['./character-generator.component.scss']
})
export class CharacterGeneratorComponent implements OnInit {
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
