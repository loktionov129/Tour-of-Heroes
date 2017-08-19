import { Routes } from '@angular/router';
export const ROUTES: Routes = [
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
  { path: 'todo', loadChildren: 'app/todo/todo.module#TodoModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home'},
];
