import { Injectable } from '@angular/core';

import { Hero } from './_hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise< Array<Hero> > {
        return Promise.resolve(HEROES);
    }
}