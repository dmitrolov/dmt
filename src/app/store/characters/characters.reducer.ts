import * as CharacterActions from './characters.actions';
import {PlayerCharacter} from '../../../assets/data/character/playerCharacter';

export type Action = CharacterActions.All;

const defaultState: PlayerCharacter = {
  aboutCharacter: {
    attributes: {
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      strength: 0,
      wisdom: 0,
    },
    adventureInfo: {
      armorClass: 0,
      darkVision: 0,
      deathSaves: {
        failures: 0,
        successes: 0,
      },
      experience: 0,
      hitPoints: {
        current: 0,
        max: 0,
        temp: 0,
      },
      immunity: [],
      initiative: 0,
      inspiration: false,
      resistance: [],
      savingThrows: [],
      size: 0,
      speed: 0,
    },
    description: {
      alignment: 'undefined',
      bonds: [],
      flaws: [],
      height: 0,
      humanAge: 0,
      ideals: [],
      imageUrl: 'undefined',
      personalityTraits: [],
      sex: 'male',
      weight: 0
    },
    mainInfo: {
      background: '',
      characterName: '',
      classes: [{
        name: 'undefined',
        level: 1
      }],
      feats: [],
      playerName: '',
      race: 'undefined'
    },
    proficiency: {
      armor: [],
      bonus: 0,
      languages: [],
      skills: [],
      tools: [],
      weapons: []
    }
  }
};

export function characterReducer(state: PlayerCharacter = defaultState, action: Action) {
  switch (action.type) {
    case CharacterActions.GET_CHARACTER:
      return state;
    case CharacterActions.GET_DEFAULT_CHARACTER:
      return defaultState;
    case CharacterActions.SET_CHARACTER:
      return {...defaultState, ...state, ...action.character};
    default:
      return state;

  }

  console.log('[characterReducer]', action.type, state);

}
