import {Component, Input, OnInit} from '@angular/core';
import {PlayerCharacter} from '../../../../playerCharacter';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  @Input() currentUser: PlayerCharacter;
  private attributesOptions = [
    {
      src: 'assets/img/character-page/Attributes/strength.jpg',
      text: 'Сила',
      attribute: 'strength',
      skills: [
        {text: 'Атлетика', proficiency: false}
      ]
    },
    {
      src: 'assets/img/character-page/Attributes/dexterity.jpg',
      text: 'Ловкость',
      attribute: 'dexterity',
      skills: [
        {text: 'Акробатика', proficiency: false},
        {text: 'Ловкость рук', proficiency: false},
        {text: 'Скрытность', proficiency: false}
      ]
    },
    {
      src: 'assets/img/character-page/Attributes/constitution.jpg',
      text: 'Телосложение',
      attribute: 'constitution',
      skills: [
        {text: 'Выносливость', proficiency: false}
      ]
    },
    {
      src: 'assets/img/character-page/Attributes/intelligence.jpg',
      text: 'Интеллект',
      attribute: 'intelligence',
      skills: [
        {text: 'Анализ', proficiency: true},
        {text: 'История', proficiency: true},
        {text: 'Магия', proficiency: true},
        {text: 'Природа', proficiency: false},
        {text: 'Религия', proficiency: false}
      ]
    },
    {
      src: 'assets/img/character-page/Attributes/wisdom.jpg',
      text: 'Мудрость',
      attribute: 'wisdom',
      skills: [
        {text: 'Внимательность', proficiency: false},
        {text: 'Выживание', proficiency: false},
        {text: 'Медицина', proficiency: false},
        {text: 'Проницательность', proficiency: true},
        {text: 'Уход за животными', proficiency: false}
      ]
    },
    {
      src: 'assets/img/character-page/Attributes/charisma.jpg',
      text: 'Харизма',
      attribute: 'charisma',
      skills: [
        {text: 'Выступление', proficiency: false},
        {text: 'Запугивание', proficiency: false},
        {text: 'Обман', proficiency: false},
        {text: 'Убеждение', proficiency: false}
      ]
    }
  ];

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
