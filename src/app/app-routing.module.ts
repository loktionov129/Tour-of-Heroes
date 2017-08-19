import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
  { path: 'todo', loadChildren: 'app/todo/todo.module#TodoModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
