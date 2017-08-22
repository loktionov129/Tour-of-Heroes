import { Action } from '@ngrx/store';

export class HeroActions {
  public static ADD_HERO = '[heroes] Add new hero';
  public static ADD_HERO_SUCCESS = '[heroes] successfully added new hero';
  public static LOAD_HERO_LIST = '[heroes] Load Hero List';
  public static LOAD_HERO_LIST_SUCCESS = '[heroes] successfully Hero List Loaded';

  public static addHero({name}): Action {
    return {
      type: HeroActions.ADD_HERO,
      payload: { name }
    };
  }

  public static addHeroSuccess(response: any): Action {
    return {
      type: HeroActions.ADD_HERO_SUCCESS,
      payload: response
    };
  }

  public static loadHeroList(): Action {
    return {
      type: HeroActions.LOAD_HERO_LIST,
      payload: { }
    };
  }

  public static loadHeroListSuccess(response: any): Action {
    return {
      type: HeroActions.LOAD_HERO_LIST_SUCCESS,
      payload: response
    };
  }
};
