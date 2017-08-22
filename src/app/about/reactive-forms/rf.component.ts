import { Component, HostBinding } from '@angular/core';
import { slideAnimation } from './../../shared/animations';

@Component({
  template: `
    <h3>reactive-forms</h3>
    <rf-form></rf-form>
    <rf-list></rf-list>
  `,
  animations: [ slideAnimation ]
})
export class RFComponent {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
}
