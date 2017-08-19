import { Routes } from '@angular/router';
export const ROUTES: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule', pathMatch: 'full' },
  { path: 'todo', loadChildren: 'app/todo/todo.module#TodoModule' },
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
  { path: '**', redirectTo: '/'},
];
