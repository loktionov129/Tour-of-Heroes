import { Component, HostBinding } from '@angular/core';
import { slideAnimation } from '../../../shared/animations';
@Component({
  templateUrl: './home-main.component.html',
  animations: [ slideAnimation ]
})
export class HomeMainComponent {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
}
