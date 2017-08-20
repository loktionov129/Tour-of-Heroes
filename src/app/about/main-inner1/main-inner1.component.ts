import { Component, HostBinding } from '@angular/core';
import { slideAnimation } from './../../shared/animations';
@Component({
  template: `<h3>main-inner1</h3>`,
  animations: [ slideAnimation ]
})
export class MainInner1Component {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
}
