import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { ExitHeroGuard } from './hero-detail/hero-detail.guard';
/*import { StoreModule } from '@ngrx/store';
import { heroesReducer } from './store/heroes.store';*/
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroService, InMemoryDataService } from './services';
import {
  HeroMainComponent, DashboardComponent, HeroListComponent,
  HeroFormComponent, HeroSearchComponent, HeroDetailComponent
} from './index';

@NgModule({
  imports: [
    SharedModule,
    HeroesRoutingModule,
    HttpModule,
    MdCardModule,
    /*StoreModule.forRoot({ heroes: heroesReducer }),*/
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    HeroMainComponent, DashboardComponent, HeroFormComponent,
    HeroListComponent, HeroSearchComponent, HeroDetailComponent
  ],
  providers: [ HeroService, ExitHeroGuard ]
})
export class HeroesModule { }
