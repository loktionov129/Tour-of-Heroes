import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Todo } from '../../models';
import { TodoService } from '../../services';

@Component({
  selector: 'my-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]>;
  public groupId: string = '-1';

  constructor(private todoService: TodoService) {}

  public ngOnInit() {
    this.todos$ = this.todoService.getTodos().share();
  }

  public exportTodos(): void {
    this.todoService.exportTodos();
  }

  public importTodos(event: Event): void {
    this.todos$ = this.todoService.importTodos(event.target).share();
  }

  public removeCompleted(): void {
    this.todos$ = this.todoService.removeCompleted(this.groupId).share();
  }

  public toggleAll(): void {
    this.todoService.toggleAll(this.groupId);
  }
}
