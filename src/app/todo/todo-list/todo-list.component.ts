import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'my-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
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
