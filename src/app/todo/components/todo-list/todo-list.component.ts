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
    console.log(this.todos);
  }

  public exportTodos(): void {
    this.todoService.exportTodos();
  }

  public importTodos(event: Event): void {
    this.todoService.importTodos(event.target).then((todos: Todo[]) => this.todos = todos)
      .catch((error) => console.error(error));
  }

  public removeCompleted(): void {
    this.todos = this.todoService.removeCompleted();
  }

  public toggleAll(): void {
    this.todoService.toggleAll();
  }
}
