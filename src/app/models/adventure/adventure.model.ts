import {Character} from '../character/character.model';
import {Quest} from '../quest/quest.model';

export interface Adventure {
  characters: Character[];
  quests: Quest[];
  date?: number;
  notes?: {}[];
  settings?: {}[];
}
