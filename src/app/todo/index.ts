import { NgModule } from '@angular/core';
import { MdCheckboxModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { TodoRoutingModule } from './routes';
import { TodoService } from './services/todo.service';

import components from './components';
import pages from './pages';

@NgModule({
  imports: [
    SharedModule,
    TodoRoutingModule,
    MdCheckboxModule,
  ],
  exports: [ MdCheckboxModule ],
  declarations: [
    ...components,
    ...pages
  ],
  providers: [ TodoService ]
})
export class TodoModule { }
