import {CharacterEquipment} from './equipment/character.equipment.model';
import {CharacterAbout} from './about/character.about.model';

export interface Character {
  about: CharacterAbout;
  abilities: string[];
  equipment: CharacterEquipment[];
  // equipment: {
  //   weapon: {
  //     type: 'melee' | 'ranged'
  //     stats: ItemStats
  //     description: string
  //
  //     features: string[]
  //     damage: {
  //       type: string
  //       dice: number
  //       count: number
  //     }[]
  //     ammunitionCount: number
  //   }
  //   armor: {
  //     stats: ItemStats
  //     type: string
  //     armorClass: number
  //     shield: boolean
  //     stealthPenalty: boolean
  //     strengthRequirement: number
  //   }
  //   magicFocus: ItemStats
  //   coins: {
  //     bronze: number
  //     silver: number
  //     gold: number
  //     electrum: number
  //     platinum: number
  //     storage: number
  //   }
  //   treasures: ItemStats[]
  // };
}
