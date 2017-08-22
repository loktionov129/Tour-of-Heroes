import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../hero';
import { HeroState } from '../store/hero.reducer';
import { HeroActions } from '../store/hero.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ngrx-list',
  template: `
    <ul *ngIf="(heroes$ | async).length">
      <li *ngFor="let hero of (heroes$  | async)">{{hero.id}} - {{hero.name}}</li>
    </ul>
  `
})
export class NgrxListComponent implements OnInit {
  public heroes$: Observable<Hero[]>;

  constructor(private store: Store<HeroState>) {
    this.heroes$ = store.select('heroes');
  }

  public ngOnInit() {
    this.store.dispatch(HeroActions.loadHeroList());
  }
}
