import { Component, HostBinding } from '@angular/core';
import { slideAnimation } from './../../shared/animations';

@Component({
  template: `
    <h3>ngrx</h3>
    <ngrx-form></ngrx-form>
    <ngrx-list></ngrx-list>
  `,
  animations: [ slideAnimation ]
})
export class NgrxComponent {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
}
