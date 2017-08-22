import { Action } from '@ngrx/store';
import { Hero } from '../hero';
import { HeroActions } from './hero.action';

export interface HeroState {
  heroes: Hero[];
}

const defaultState: Hero[] = [];

export function heroReducer(state: Hero[] = defaultState, action: Action) {

  console.log('case:', action.type, ' ', action, state);
  switch (action.type) {
    case HeroActions.ADD_HERO:
      state.push(new Hero(state.length + 1, action.payload.name));
      return state;

/*    case HeroActions.ADD_HERO_SUCCESS:
      return state;

    case HeroActions.LOAD_HERO_LIST:
      return state;*/

    case HeroActions.LOAD_HERO_LIST_SUCCESS:
      state = action.payload;
      return state;

    // case GET_HERO: return state;
    // case REMOVE_HERO: return state;
    // case SEARCH_HERO: return state;
    // case UPDATE_HERO: return state;
    default: return state;
  }
}
