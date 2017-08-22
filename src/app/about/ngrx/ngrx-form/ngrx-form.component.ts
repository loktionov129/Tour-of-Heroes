import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../hero';
import { HeroState } from '../store/hero.reducer';
import { Observable } from 'rxjs/Observable';
import { HeroActions } from '../store/hero.action';

@Component({
  selector: 'ngrx-form',
  template: `<form (ngSubmit)="onAdd($event);heroForm.reset();" #heroForm="ngForm">
    <input name="name" [(ngModel)]="heroname" placeholder="hero name" required>
    <button type="submit" [disabled]="!heroname">add</button>
  </form>`
})
export class NgrxFormComponent {
  public heroname = '';
  public heroes$: Observable<Hero[]>;

  constructor(private store: Store<HeroState>) {
    this.heroes$ = store.select('heroes');
  }

  public onAdd(): void {
    console.log('send new hero', this.heroname);
    this.store.dispatch(HeroActions.addHero({name: this.heroname}));
  }
}
