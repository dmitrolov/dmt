import {CharacterStats} from '../character/about/components/character-stats.model';
import {CharacterEffects} from '../character/about/components/character-effects.model';
import {CharacterAttributes} from '../character/about/components/character-attributes.model';
import {CharacterProficiency} from '../character/about/components/character-proficiency.model';

export interface CharacterRace extends DomItem {
  stats: CharacterStats;
  effects: CharacterEffects;
  attributes: CharacterAttributes;
  proficiency: CharacterProficiency;
  abilities: string[];
  subRaces?: CharacterRace[];
  raceGenerator?: RaceGenerator;
}

interface RaceGenerator {
  height: BoundaryValues;
  weight: BoundaryValues;
  ageModifier: number;
  names: {
    male: Localization;
    female: Localization;
  };
  image: string;
}

interface BoundaryValues {
  min: number;
  max: number;
}
