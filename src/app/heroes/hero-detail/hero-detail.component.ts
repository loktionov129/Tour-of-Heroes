import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../services';
import { ComponentCanDeactivate } from './hero-detail.guard';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy, ComponentCanDeactivate {
  public hero: Hero;
  private data$: any;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  public canDeactivate(): boolean | Observable<boolean> {

    if (!this.hero || this.hero.name) {
      return true;
    } else {
      return confirm('Вы хотите покинуть страницу?');
    }
  }

  public ngOnInit(): void {
    this.data$ = this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe((hero: Hero) => this.hero = hero, (err) => this.router.navigate(['/heroes']));
  }

  public ngOnDestroy(): void {
    this.data$.unsubscribe();
  }

  public goBack(): void {
    console.log('before location.back');
    this.location.back();
    console.log('location.back');
  }

  public save(): void {
    if (this.hero.name) {
      this.heroService.update(this.hero).then(() => this.goBack());
    }
  }
}
