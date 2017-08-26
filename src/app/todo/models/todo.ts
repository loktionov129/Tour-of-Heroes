export class Todo {
  public id: number;

  constructor(
    public title: string,
    public completed = false
  ) {}
}
