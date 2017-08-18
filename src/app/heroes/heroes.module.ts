import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroService } from './services/hero/';
import { HeroesComponent } from './heroes';
import { DashboardComponent } from './dashboard';
import { HeroListComponent } from './hero-list/';
import { HeroSearchComponent } from './hero-search/';
import { HeroDetailComponent } from './hero-detail/';

@NgModule({
  imports: [
    SharedModule,
    HeroesRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    HeroesComponent, DashboardComponent, HeroListComponent, HeroSearchComponent, HeroDetailComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule { }
