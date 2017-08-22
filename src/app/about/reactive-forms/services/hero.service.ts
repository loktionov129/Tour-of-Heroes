import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

const HEROES: Hero[] = [
  {id: 1, name: 'first', age: 17 },
  {id: 2, name: 'second', age: 19 },
  {id: 3, name: 'third', age: 16 }
];

@Injectable()
export class HeroService {
  public heroes: Hero[] = HEROES;

  public add(hero: Hero): void {
    hero.id = hero.id || this.heroes.length + 1;
    this.heroes.push(hero);
    console.log('[service] hero pushed', hero);
  }

  public getHeroes(): Hero[] {
    console.log('load heroes....');
    return this.heroes;
  }
}
