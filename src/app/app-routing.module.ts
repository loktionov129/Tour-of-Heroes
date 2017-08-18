import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full'},
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' },
  { path: '**', redirectTo: 'heroes'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
