import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Hero } from '../hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class HeroService {

  constructor(private http: Http) {}

  public addHero(name: string): Observable<any> {
    console.log('[service]: push hero into db', name);
    // return this.http.put hero into db
    return this.http.get('assets/heroes.json?action=put&name=name');
  }

  public getHeroes(): Observable<Hero[]> {
    console.log('load heroes....');

    return this.http.get('assets/heroes.json')
      .delay(2000)
      // .map((response) => response.json().heroes as Hero[]);
       .map((response) => {
         let heroes: Hero[] = response.json().heroes;
         console.log('[service]: heroes loaded!', heroes);
         return heroes;
       });
  }
}
