import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeroService } from '../services';
import { Hero } from '../hero';

@Component({
  selector: 'my-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
          ':enter', [
            style({transform: 'translateX(100%)', opacity: 0}),
            animate('300ms', style({transform: 'translateX(0)', opacity: 1}))
          ]
        ),
        transition(
          ':leave', [
            style({transform: 'translateX(0)', opacity: 1}),
            animate('300ms', style({transform: 'translateX(100%)', opacity: 0}))]
        )]
    )
  ]
})
export class HeroFormComponent {
  @Output() public add = new EventEmitter();
  public hero: Hero = new Hero();
  public sidebar = false;

  constructor(private heroService: HeroService) {}

  public create(): void {
    this.hero.name = this.hero.name.trim();
    if (!this.hero.name) {
      return;
    }

    if (!this.hero.image) {
      this.hero.image = './assets/img/undefined.jpg';
    }

    if (!this.hero.imagedetail) {
      this.hero.imagedetail = './assets/img/undefined.jpg';
    }

    this.heroService.create(this.hero)
      .then((res) => this.add.emit(res))
      .catch((err) => console.log('er', err));

    this.sidebar = false;
  }
}
