import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
/*import { Store } from '@ngrx/store';
import { CREATE, GET_HEROES, GET_HERO, REMOVE, UPDATE, SEARCH } from '../store/heroes.store';*/
import { Hero } from '../hero';

/*interface HeroState {
  heroes: Hero[];
}*/

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http/*, private store: Store<HeroState>*/) { }

  public create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name}), {headers: this.headers})
      .toPromise()
      .then((res) => res.json().data as Hero)
      .catch(this.handleError);
  }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map((response) => response.json().data as Hero[]);
  }

  public getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then((response) => response.json().data as Hero)
      .catch(this.handleError);
  }

  public remove(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  public update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
