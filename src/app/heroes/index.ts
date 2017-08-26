import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdCardModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SharedModule } from '../shared/shared.module';
import { HeroesRoutingModule } from './routes';
import { HeroService, InMemoryDataService } from './services';
import { ExitHeroGuard } from './pages/hero-detail/hero-detail.guard';

import components from './components';
import pages from './pages';

@NgModule({
  imports: [
    SharedModule,
    HeroesRoutingModule,
    HttpModule,
    MdCardModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    ...components,
    ...pages
  ],
  providers: [ HeroService, ExitHeroGuard ]
})
export class HeroesModule { }
