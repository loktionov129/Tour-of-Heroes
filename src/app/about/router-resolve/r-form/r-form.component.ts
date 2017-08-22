import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroServiceForResolver } from '../services';

@Component({
  selector: 'r-form',
  template: `<form (ngSubmit)="onAdd($event);" #heroForm="ngForm">
    <input name="name" [(ngModel)]="hero.name" placeholder="hero name">
    <button type="submit" [disabled]="!hero.name">add</button>
  </form>`
})
export class RFormComponent {
  public hero: Hero = new Hero();

  constructor(private heroService: HeroServiceForResolver) {}

  public onAdd(): void {
    console.log('send new hero', this.hero);
    this.heroService.add(this.hero);
    this.hero = new Hero();
  }
}
