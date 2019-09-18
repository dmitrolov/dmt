import * as CharacterActions from './characters.actions';
import {Character} from '../../models/character/character.model';
import {initialState} from './initialState';

export type Action = CharacterActions.All;

export function characterReducer(state: Character = initialState, action: Action) {
  console.log('[characterReducer]', action.type, state);
  switch (action.type) {
    case CharacterActions.GET_CHARACTER:
      return state;
    case CharacterActions.GET_DEFAULT_CHARACTER:
      return initialState;
    case CharacterActions.SET_CHARACTER:
      return {...initialState, ...state, ...action.character};
    default:
      return state;

  }
}
