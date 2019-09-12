import {CharacterInfo} from './info/character.info.model';

export interface PlayerCharacter {
  characterInfo: CharacterInfo;
  abilities: string[];
  inventory: string[];
  // inventory: {
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
