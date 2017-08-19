import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoMainComponent } from './todo-main';

const routes: Routes = [{
  path: '',
  component: TodoMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
