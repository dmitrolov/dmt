import {Action} from '@ngrx/store';
import {PlayerCharacterInterface} from '../../data/playerCharacterInterface';

export const GET_CHARACTER    = '[Character] Get';
export const ADD_CHARACTER    = '[Character] Add';
export const SET_CHARACTER    = '[Character] Set';
export const DELETE_CHARACTER = '[Character] Delete';

export class GetCharacter implements Action {
  readonly type = GET_CHARACTER;
}
export class SetCharacter implements Action {
  readonly type = SET_CHARACTER;

  constructor(public character: PlayerCharacterInterface) {
  }
}

export type All
  = GetCharacter
  | SetCharacter;
  // | Reset
  // | EditText;
