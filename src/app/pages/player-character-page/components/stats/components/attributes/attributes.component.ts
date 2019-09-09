import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacterInterface} from '../../../../../../data/playerCharacterInterface';
import attributesOptions from './attributesOptions';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  @Input() currentUser: PlayerCharacterInterface;
  private attributesOptions = attributesOptions;

  constructor() {

  }

  ngOnInit() {

  }

  getAttributeModifier(attribute: number) {
    const result = Math.floor(attribute / 2) - 5;
    let view: string = result.toString();
    if (result > 0) {
      view = `+${result}`;
    }
    return view;
  }
}
