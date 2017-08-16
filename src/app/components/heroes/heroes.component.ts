import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../_hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styles: [require('./heroes.component.scss').toString()]
})
export class HeroesComponent implements OnInit  {
    public heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    public ngOnInit() {
        this.heroService.getHeroes()
            .then((heroes) => this.heroes = heroes)
            .catch((err) => console.log(err.msg || err));
    }

    public add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }

        this.heroService.create(name)
            .then((hero) => this.heroes.push(hero));
    }

    public remove(hero: Hero): void {
        this.heroService.remove(hero.id)
            .then(() => this.heroes = this.heroes.filter((h) => h !== hero));
    }
}
