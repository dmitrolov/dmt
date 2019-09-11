import {Action} from '@ngrx/store';
import {PlayerCharacterModel} from '../../../assets/data/character/playerCharacter';

export const GET_CHARACTER          = '[Character] Get';
export const GET_DEFAULT_CHARACTER  = '[Character] Get Default';
export const ADD_CHARACTER          = '[Character] Add';
export const SET_CHARACTER          = '[Character] Set';
export const DELETE_CHARACTER       = '[Character] Delete';

export class GetCharacter implements Action {
  readonly type = GET_CHARACTER;
}
export class GetDefaultCharacter implements Action {
  readonly type = GET_DEFAULT_CHARACTER;
}
export class SetCharacter implements Action {
  readonly type = SET_CHARACTER;

  constructor(public character: PlayerCharacterModel) {
  }
}

export type All
  = GetCharacter
  | SetCharacter
  | GetDefaultCharacter;
