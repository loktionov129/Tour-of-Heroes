import { Action } from '@ngrx/store';
import { Todo } from '../todo';

export const CREATE = 'CREATE';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODO = 'GET_TODO';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';
export const SEARCH = 'SEARCH';

const defaultState: Todo[] = [];

export function heroesReducer(state: Todo[] = defaultState, action: Action) {
  switch (action.type) {
    case CREATE: return state;
    case GET_TODOS: return state;
    case GET_TODO: return state;
    case REMOVE: return state;
    case SEARCH: return state;
    case UPDATE: return state;
    default: return state;
  }
}
