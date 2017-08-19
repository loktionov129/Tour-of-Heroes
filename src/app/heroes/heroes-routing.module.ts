import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroMainComponent } from './hero-main';
import { HeroListComponent } from './hero-list/';
import { HeroDetailComponent } from './hero-detail/';
import { DashboardComponent } from './dashboard';

const routes: Routes = [{
  path: '',
  component: HeroMainComponent,
  children: [
    { path: '',    component: DashboardComponent },
    { path: 'list',    component: HeroListComponent },
    { path: 'detail/:id', component: HeroDetailComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
