import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Hero }              from '../../_hero';
import { HeroService }       from '../../services/hero/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',

    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit  {
    heroes: Array<Hero>;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(err => console.log(err.msg || err));
    }
}
