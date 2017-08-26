import { Component, HostBinding } from '@angular/core';
import { slideAnimation } from './../../../shared/animations';

@Component({
  template: `
    <my-todo-form></my-todo-form>
    <my-todo-list></my-todo-list>`,
  animations: [ slideAnimation ],
  styles: [':host { width: 415px; }']
})
export class TodoMainComponent {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
}
