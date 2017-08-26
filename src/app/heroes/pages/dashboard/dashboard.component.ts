import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { slideAnimation } from '../../../shared/animations';
import { Hero } from '../../models';
import { HeroService } from '../../services';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ slideAnimation ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
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
