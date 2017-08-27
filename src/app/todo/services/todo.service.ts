import { Injectable } from '@angular/core';
import { Todo } from '../models';
import { GROUPS } from '../mock-data/groups';
import { FileLoader } from '../../shared/helpers';

@Injectable()
export class TodoService {
  private storeName = 'todoStore';
  private todos: Todo[] = [];

  public add(title: string): void {
    let id = 0;
    if (this.todos.length > 0) {
      this.todos.forEach((todo: Todo) => id = todo.id > id ? todo.id : id);
    }

    // TODO: FIX IT
    // TODO: group don't be a MAGIC
    this.todos.push(new Todo(id + 1, title, GROUPS[0]));
    this.saveTodos();
  }

  public exportTodos(): void {
    FileLoader.download('todo.json', this.todos);
  }

  public importTodos(fileInput): Promise<Todo[]> {
    return FileLoader.readFile(fileInput)
      .then((data: string) => {
        try {
          const todos = JSON.parse(data) as Todo[];
          if (todos.length < 1 || todos[0] instanceof Todo === false) {
            throw `invalid json data: '${data}'`;
          }
          this.todos = todos;
          this.saveTodos();
        } catch (e) {
          console.error(e);
        }
        return this.todos;
      })
      .catch((error) => console.error(error));
  }

  public getTodos(): Todo[] {
    this.loadTodos();
    return this.todos;
  }

  public haveUnCompleted(groupId: string): boolean {
    if (groupId === '-1') {
      return this.todos.some((todo: Todo) => !todo.completed);
    }

    return this.todos.some((todo: Todo) => !todo.completed && todo.group.id === groupId);
  }

  public remove(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  public removeCompleted(groupId: string): Todo[] {
    if (groupId === '-1') {
      this.todos = this.todos.filter((todo: Todo) => !todo.completed);
    } else {
      this.todos = this.todos.filter((todo: Todo) => todo.group.id === groupId ? !todo.completed : true);
    }
    this.saveTodos();
    return this.todos;
  }

  public toggle(todo: Todo): void {
    const index = this.findById(todo.id);
    this.todos[index].completed = !this.todos[index].completed;
    this.saveTodos();
  }

  public toggleAll(groupId: string): void {
    const state = this.haveUnCompleted(groupId);

    if (groupId === '-1') {
      this.todos.forEach((todo: Todo) => todo.completed = state);
    } else {
      this.todos.forEach((todo: Todo) => todo.group.id === groupId && (todo.completed = state));
    }

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
