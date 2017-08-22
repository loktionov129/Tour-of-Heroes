import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Hero } from '../hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class HeroServiceForResolver {

  constructor(private http: Http) {}

  public add(hero: Hero): void {
    // hero.id = hero.id || this.heroes.length + 1;
    // this.heroes.push(hero);
    console.log('hero NOT pushed', hero);
  }

  public getHeroes(): Observable<any> {
    console.log('load heroes....');

    return this.http.get('assets/heroes.json')
      .delay(2000)
      // .map((response) => response.json().heroes as Hero[]);
       .map((response) => {
         let heroes: Hero[] = response.json().heroes;
         console.log('heroes loaded!', heroes);
         return heroes;
       });
  }
}
