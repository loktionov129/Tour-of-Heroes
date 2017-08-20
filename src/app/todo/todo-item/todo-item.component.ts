import { Component, Input, HostBinding } from '@angular/core';
import { slideAnimation } from './../../shared/animations';
import { Todo } from '../todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'my-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [ slideAnimation ]
})
export class TodoItemComponent {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
  @Input() public todo: Todo;
  public checked: boolean;

  constructor(private todoService: TodoService) {}
  public remove(): void {
    this.todoService.remove(this.todo);
  }

  public toggle(): void {
    this.todoService.toggle(this.todo);
  }
}
