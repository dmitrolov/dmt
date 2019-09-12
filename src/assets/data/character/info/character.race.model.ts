import {CharacterStats} from './character.stats.model';
import {CharacterAttributes} from './character.attributes.model';
import {CharacterProficiency} from './character.proficiency.model';
import {CharacterEffects} from './character.effects.model';

export interface CharacterRace extends DomItem {
  stats: CharacterStats;
  effects: CharacterEffects;
  attributes: CharacterAttributes;
  proficiency: CharacterProficiency;
  abilities: string[];
  subRaces?: CharacterRace[];
}

