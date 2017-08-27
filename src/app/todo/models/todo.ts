import { Group } from './group';

export class Todo {
  constructor(
    public id: number,
    public title: string,
    public group: Group,
    public completed = false
  ) {}
}
