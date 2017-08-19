import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    new Todo('Make Home'),
    new Todo('Create Heroes', true),
    new Todo('Create Todo')
  ];

  public add(title: string): void {
    this.todos.push(new Todo(title));
    console.log('add', this.todos);
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public toggle(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos[index].completed = !this.todos[index].completed;
  }
}
