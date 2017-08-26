import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models';
import { TodoService } from '../../services';

@Component({
  selector: 'my-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];

  constructor(private todoService: TodoService) {}

  public ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  public removeCompleted(): void {
    this.todos = this.todoService.removeCompleted();
  }

  public toggleAll(): void {
    this.todoService.toggleAll();
  }
}
