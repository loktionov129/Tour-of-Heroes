import { Routes } from '@angular/router';
import {
  HeroMainComponent, DashboardComponent, HeroListComponent,
  HeroDetailComponent
} from './index';
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
