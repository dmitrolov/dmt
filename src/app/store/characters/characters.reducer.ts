import * as CharacterActions from './characters.actions';
import {PlayerCharacterInterface} from '../../data/playerCharacterInterface';
import {Gremmy} from '../../data/gremmy';

export type Action = CharacterActions.All;

const defaultState: PlayerCharacterInterface = {
  characterName: 'Default Name',
  playerName: 'Default Player Name',
  imageUrl: 'src/assets/img/default-user-icon-4.jpg',
  attributes: {
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    strength: 0,
    wisdom: 0,
  },
  height: 1,
  humanAge: 20,
  race: 'gnome',
  sex: 'male',
  weight: 1,
  skillsProficiency: {
    Acrobatics: false,
    AnimalHandling: false,
    Arcana: false,
    Athletics: false,
    Deception: false,
    Endurance: false,
    History: false,
    Insight: false,
    Intimidation: false,
    Investigation: false,
    Medicine: false,
    Nature: false,
    Perception: false,
    Performance: false,
    Persuasion: false,
    Religion: false,
    SleightOfHand: false,
    Stealth: false,
    Survival: false,
  }
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function characterReducer(state: PlayerCharacterInterface = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case CharacterActions.GET_CHARACTER:
      return state;
    case CharacterActions.SET_CHARACTER:
      return {...state, ...action.character};
    default:
      return state;

  }

}
