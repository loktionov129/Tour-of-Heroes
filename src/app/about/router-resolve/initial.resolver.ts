import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroServiceForResolver } from './services';
import { Hero } from './hero';

@Injectable()
export class InitialResolver implements Resolve<any> {
  constructor(private heroService: HeroServiceForResolver) {}

  public resolve(route, state): Observable<Hero[]> | Promise<Hero[]> | any {
    console.log('load heroes before load');
    return this.heroService.getHeroes();
    // return Observable.of<Hero[]>([]).delay(2000);
  }
}
