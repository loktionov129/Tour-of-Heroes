import { Action } from '@ngrx/store';
import { Hero } from '../hero';

export const CREATE = 'CREATE';
export const GET_HEROES = 'GET_HEROES';
export const GET_HERO = 'GET_HERO';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';
export const SEARCH = 'SEARCH';

const defaultState: Hero[] = [];

export function heroesReducer(state: Hero[] = defaultState, action: Action) {
  switch (action.type) {
    case CREATE: return state;
    case GET_HEROES: return state;
    case GET_HERO: return state;
    case REMOVE: return state;
    case SEARCH: return state;
    case UPDATE: return state;
    default: return state;
  }
}
