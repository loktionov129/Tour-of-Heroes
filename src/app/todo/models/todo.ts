export class Todo {
  private static count = 0;
  public id: number;

  constructor(
    public title: string,
    public completed = false
  ) {
    this.id = ++Todo.count;
  }
}
