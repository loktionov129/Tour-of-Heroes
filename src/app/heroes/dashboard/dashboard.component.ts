import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/take';

import { Hero } from '../hero';
import { HeroService } from '../services';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public heroes: Hero[];
  private subscription;

  constructor(private heroService: HeroService) { }

  public ngOnInit(): void {
    this.subscription = this.heroService.getHeroes()
      /*.take(4)*/.subscribe((heroes) => this.heroes = heroes.slice(0, 4));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
