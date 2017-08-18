import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes';
import { HeroListComponent } from './hero-list/';
import { HeroDetailComponent } from './hero-detail/';
import { DashboardComponent } from './dashboard';

const routes: Routes = [{
  path: '',
  component: HeroesComponent,
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
