import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'my-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() public todo: Todo;

  constructor(private todoService: TodoService) {}

  public toggle(): void {
    this.todoService.toggle(this.todo);
  }
}
