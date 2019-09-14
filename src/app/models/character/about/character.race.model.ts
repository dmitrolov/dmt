import {CharacterStats} from './components/character.stats.model';
import {CharacterAttributes} from './components/character.attributes.model';
import {CharacterProficiency} from './components/character.proficiency.model';
import {CharacterEffects} from './components/character.effects.model';

export interface CharacterRace extends DomItem {
  stats: CharacterStats;
  effects: CharacterEffects;
  attributes: CharacterAttributes;
  proficiency: CharacterProficiency;
  abilities: string[];
  subRaces?: CharacterRace[];
}

