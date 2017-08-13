import {Component, Input} from '@angular/core';
import { Hero }  from './_hero';

@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="hero">
      <h3>{{hero.name}} details!</h3>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input type="text" name="name" placeholder="name" [(ngModel)]="hero.name">
      </div>
  </div>
    `
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}