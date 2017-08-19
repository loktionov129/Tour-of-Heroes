import { Routes } from '@angular/router';
import { HeroMainComponent } from './hero-main';
import { HeroListComponent } from './hero-list/';
import { HeroDetailComponent } from './hero-detail/';
import { DashboardComponent } from './dashboard';
import { ExitHeroGuard } from './hero-detail/hero-detail.guard';

export const ROUTES: Routes = [{
  path: '',
  component: HeroMainComponent,
  children: [
    { path: '',    component: DashboardComponent },
    { path: 'list',    component: HeroListComponent },
    { path: 'detail/:id', component: HeroDetailComponent, canDeactivate: [ExitHeroGuard] }
  ]
}];
