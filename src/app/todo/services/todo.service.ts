import { Injectable } from '@angular/core';
import { Todo } from '../models';

@Injectable()
export class TodoService {
  private storeName = 'todoStore';
  private todos: Todo[] = [];

  public add(title: string): void {
    this.todos.push(new Todo(title));
    this.saveTodos();
  }

  public getTodos(): Todo[] {
    this.loadTodos();
    return this.todos;
  }

  public haveCompleted() {
    return this.todos.some((todo: Todo) => !todo.completed);
  }

  public remove(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  public removeCompleted(): Todo[] {
    this.todos = this.todos.filter((todo: Todo) => !todo.completed);
    this.saveTodos();
    return this.todos;
  }

  public toggle(todo: Todo): void {
    const index = this.findById(todo.id);
    this.todos[index].completed = !this.todos[index].completed;
    this.saveTodos();
  }

  public toggleAll(): void {
    const state = this.haveCompleted();
    this.todos.forEach((todo: Todo) => todo.completed = state);
    this.saveTodos();
  }

  public update(todo: Todo): void {
    const index = this.findById(todo.id);
    this.todos[index] = todo;
    this.saveTodos();
  }

  private findById(id: number): number {
    return this.todos.findIndex((todo: Todo) => todo.id === id);
  }

  private loadTodos(): void {
    const data = localStorage.getItem(this.storeName);
    this.todos = JSON.parse(data || '[]');
  }

  private saveTodos(): void {
    localStorage.setItem(this.storeName, JSON.stringify(this.todos));
  }
}
