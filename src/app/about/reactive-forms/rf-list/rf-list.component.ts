import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services';
import 'rxjs/add/operator/toPromise';

@Component({
  providers: [HeroService],
  selector: 'rf-list',
  template: `
    <ul *ngIf="heroes">
      <li *ngFor="let hero of heroes">{{hero.id}} - {{hero.name}}'s age is {{hero.age}}</li>
    </ul>
  `
})
export class RFListComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  public ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
