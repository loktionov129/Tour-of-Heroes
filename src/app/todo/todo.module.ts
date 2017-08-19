import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';

/*import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data';*/
import { TodoService } from './services/todo.service';

import { TodoMainComponent } from './todo-main';
import { TodoFormComponent } from './todo-form';
import { TodoListComponent } from './todo-list';
import { TodoItemComponent } from './todo-item';
import { MdCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    TodoRoutingModule,
    MdCheckboxModule,
  ],
  exports: [ MdCheckboxModule ],
  declarations: [
    TodoMainComponent, TodoFormComponent, TodoListComponent, TodoItemComponent
  ],
  providers: [ TodoService ]
})
export class TodoModule { }
