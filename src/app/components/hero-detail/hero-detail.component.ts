import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }                     from '../../_hero';
import { HeroService }              from '../../services/hero/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;
    previousName: string;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe((hero: Hero) => {
                this.hero = hero;
                this.previousName = hero.name;
            });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        if (this.hero.name)
            this.heroService.update(this.hero).then(() => this.goBack());
        else
            alert("Name is required!");
    }
}