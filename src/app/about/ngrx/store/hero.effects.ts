import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { HeroService } from '../services';
import { HeroActions } from './hero.action';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroEffects {
  @Effect() public addHero$ = this.actions$
    .ofType(HeroActions.ADD_HERO)
    .map(toPayload)
    .switchMap(({name}) => this.heroService.addHero(name)
      .map((result) => HeroActions.addHeroSuccess(result))
      .catch(() => Observable.of(HeroActions.addHeroSuccess('defaultApiResponse')))
    );

  @Effect() public loadHeroList$ = this.actions$
    .ofType(HeroActions.LOAD_HERO_LIST)
    .map(toPayload)
    .switchMap(() => this.heroService.getHeroes()
      .map((result) => HeroActions.loadHeroListSuccess(result))
      .catch(() => Observable.of(HeroActions.loadHeroListSuccess('defaultApiResponse')))
    );

  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) { }
}
