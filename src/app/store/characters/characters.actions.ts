import {Action} from '@ngrx/store';
import {PlayerCharacter} from '../../../assets/data/character/playerCharacter.model';

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

  constructor(public character: PlayerCharacter) {
  }
}

export type All
  = GetCharacter
  | SetCharacter
  | GetDefaultCharacter;
