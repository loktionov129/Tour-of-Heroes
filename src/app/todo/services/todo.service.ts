import { Injectable } from '@angular/core';
import { Todo } from '../todo';

const TODOS: Todo[] = [
  new Todo('Make Home'),
  new Todo('Create Heroes', true),
  new Todo('Create Todo', true),
  new Todo('Make About')
];

@Injectable()
export class TodoService {
  private todos: Todo[] = TODOS;

  public add(title: string): void {
    this.todos.push(new Todo(title));
    console.log('add', this.todos);
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public haveCompleted() {
    return this.todos.some((todo: Todo) => !todo.completed);
  }

  public remove(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  public removeCompleted(): Todo[] {
    this.todos = this.todos.filter((todo: Todo) => !todo.completed);
    return this.todos;
  }

  public toggle(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos[index].completed = !this.todos[index].completed;
  }

  public toggleAll(): void {
    const state = this.haveCompleted();
    this.todos.forEach((todo: Todo) => todo.completed = state);
  }
}
