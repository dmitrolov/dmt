import {Action} from '@ngrx/store';

export function Reducer(state: string = 'Hello World', action: Action) {
  console.log('ACTION TYPE', action.type, 'STATE', state);

  switch (action.type) {
    case 'SPANISH':
      return state = 'Hole Mundo';
    case 'FRENCH':
      return state = 'Bonjure le monde';
    default:
      return state;
  }
}
