import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { slideAnimation } from '../../../shared/animations';
import { Hero } from '../../models';
import { HeroService } from '../../services';

@Component({
  selector: 'my-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  animations: [ slideAnimation ]
})
export class HeroListComponent implements OnInit, OnDestroy  {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
  public heroes: Hero[];
  private subscription;

  constructor(
    private heroService: HeroService
  ) {}

  public ngOnInit() {
    this.subscription = this.heroService.getHeroes()
      .subscribe((heroes) => this.heroes = heroes);
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onAdd(hero: Hero): void {
    this.heroes.push(hero);
  }

  public remove(hero: Hero): void {
    this.heroService.remove(hero.id)
      .then(() => this.heroes = this.heroes.filter((h) => h !== hero));
  }
}
