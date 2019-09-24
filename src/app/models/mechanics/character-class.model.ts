import {CharacterEffects} from '../character/about/components/character-effects.model';
import {CharacterEquipment} from '../character/equipment/character-equipment.model';
import {CharacterProficiency} from '../character/about/components/character-proficiency.model';


export interface CharacterClass extends DomItem {
  proficiency: CharacterProficiency;
  effects: CharacterEffects;
  equipment: CharacterEquipment[];
}
