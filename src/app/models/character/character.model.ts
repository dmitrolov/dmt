import {CharacterEquipment} from './equipment/character-equipment.model';
import {CharacterAbout} from './about/character-about.model';


export interface Character {
  about: CharacterAbout;
  equipment: CharacterEquipment[];
  abilities: string[];
}
