import { Component, OnInit } from '@angular/core';

import { Hero }              from '../../_hero';
import { HeroService }       from '../../services/hero/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styles: [require('./dashboard.component.scss').toString()]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }
}