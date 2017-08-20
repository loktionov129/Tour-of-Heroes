import { Component, HostBinding } from '@angular/core';
import { slideAnimation } from './../../shared/animations';
@Component({
  template: `<h3>one more main-inner</h3>`,
  animations: [ slideAnimation ]
})
export class MainInner2Component {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
}
