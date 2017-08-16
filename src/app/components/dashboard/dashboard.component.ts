import { Component, OnInit } from '@angular/core';

import { Hero } from '../../shared/hero';
import { HeroService } from '../../services/hero/';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styles: [require('./dashboard.component.scss').toString()]
})
export class DashboardComponent implements OnInit {

    public heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    public ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }
}
