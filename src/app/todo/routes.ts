import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoMainComponent } from './pages/todo-main';

export const ROUTES: Routes = [{
  path: '',
  component: TodoMainComponent
}];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class TodoRoutingModule {}
