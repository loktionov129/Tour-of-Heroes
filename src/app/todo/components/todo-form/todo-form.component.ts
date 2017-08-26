import { Component } from '@angular/core';
import { TodoService } from '../../services';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styles: ['md-input-container { width: 77%; }']
})
export class TodoFormComponent {
  public title= '';

  constructor(private todoService: TodoService) {}

  public add(): void {
    this.todoService.add(this.title);
  }
}
