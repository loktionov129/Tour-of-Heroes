import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', loadChildren: 'app/home/#HomeModule', pathMatch: 'full' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
  { path: 'todo', loadChildren: 'app/todo/#TodoModule' },
  { path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
