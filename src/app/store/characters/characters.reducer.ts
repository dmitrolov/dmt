import * as CharacterActions from './characters.actions';
import {PlayerCharacter} from '../../../assets/data/character/playerCharacter.model';

export type Action = CharacterActions.All;

const defaultState: PlayerCharacter = {
  characterInfo: {
    mainInfo: {
      playerName: '',
      characterName: '',
      race: '',
      subRace: '',
      classes: [{
        name: '',
        level: 1,
      }],
      background: '',
      feats: [],
    },
    attributes: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    stats: {
      size: 'medium',
      speed: 0,
      darkVision: 0,
      initiative: 0,
    },
    effects: {
      savingThrows: [],
      resistance: [],
      immunity: [],
    },
    action: {
      hitPoints: {
        max: 0,
        temp: 0,
        current: 0,
      },
      deathSaves: {
        failures: 0,
        successes: 0,
      },
      bonus: 0,
      armorClass: 0,
      experience: 0,
      inspiration: false,
    },
    proficiency: {
      languages: [],
      tools: [],
      armor: [],
      skills: [],
      weapons: [],
    },
    description: {
      alignment: '',
      height: 0,
      weight: 0,
      age: {
        human: 0,
        mod: 0,
        total: 0,
      },
      imageUrl: '',
      sex: 'male',
    },
    personalQualities: {
      bonds: [],
      flaws: [],
      ideals: [],
      personalityTraits: [],
    }
  },
  abilities: [],
  inventory: [],
};

export function characterReducer(state: PlayerCharacter = defaultState, action: Action) {
  console.log('[characterReducer]', action.type, state);
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
}
