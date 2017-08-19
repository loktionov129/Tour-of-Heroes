import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

/*import { StoreModule } from '@ngrx/store';
import { heroesReducer } from './store/heroes.store';*/
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroService, InMemoryDataService } from './services';
import { HeroMainComponent } from './hero-main';
import { DashboardComponent } from './dashboard';
import { HeroListComponent } from './hero-list';
import { HeroFormComponent } from './hero-form';
import { HeroSearchComponent } from './hero-search';
import { HeroDetailComponent } from './hero-detail';

@NgModule({
  imports: [
    SharedModule,
    HeroesRoutingModule,
    HttpModule,
    /*StoreModule.forRoot({ heroes: heroesReducer }),*/
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    HeroMainComponent, DashboardComponent, HeroFormComponent,
    HeroListComponent, HeroSearchComponent, HeroDetailComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule { }
