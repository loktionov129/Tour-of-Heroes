import { Component, HostBinding } from '@angular/core';
import { slideAnimation } from './../../shared/animations';

@Component({
  template: `
    <h3>router-resolver</h3>
    <r-form></r-form>
    <r-list></r-list>
  `,
  animations: [ slideAnimation ]
})
export class RComponent {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
}
