import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './pages/hero-list';
import { DashboardComponent } from './pages/dashboard';
import { HeroDetailComponent } from './pages/hero-detail';
import { ExitHeroGuard } from './pages/hero-detail/hero-detail.guard';

export const ROUTES: Routes = [
    { path: '',    component: DashboardComponent, pathMatch: 'full' },
    { path: 'list',    component: HeroListComponent },
    { path: 'detail/:id', component: HeroDetailComponent, canDeactivate: [ExitHeroGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
