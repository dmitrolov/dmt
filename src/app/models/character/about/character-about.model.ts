import {CharacterEffects} from './components/character-effects.model';
import {CharacterStats} from './components/character-stats.model';
import {CharacterAttributes} from './components/character-attributes.model';
import {CharacterProficiency} from './components/character-proficiency.model';
import {CharacterAction} from './components/character-action.model';
import {CharacterPersonalQualities} from './components/character-personal-qualities.model';
import {CharacterDescription} from './components/character-description.model';
import {CharacterInfo} from './components/character-info.model';


export interface CharacterAbout {
  info: CharacterInfo;               // Основная и обязательная информация о персонаже
  stats: CharacterStats;
  effects: CharacterEffects;
  action: CharacterAction;
  description: CharacterDescription;
  personalQualities: CharacterPersonalQualities;
  attributes: CharacterAttributes;
  proficiency: CharacterProficiency;
}
