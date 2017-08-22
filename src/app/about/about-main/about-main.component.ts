import { Component, HostBinding } from '@angular/core';
import { slideAnimation } from './../../shared/animations';

@Component({
  template: `
    <a md-raised-button
       routerLink="/about" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
    >INDEX</a>
    <a md-raised-button routerLink="/about/more" routerLinkActive="active">MORE</a>
    <a md-raised-button routerLink="/about/ngrx" routerLinkActive="active">NGRX</a>
    <a md-raised-button routerLink="/about/router-resolve" routerLinkActive="active">ROUTER-RESOLVE</a>
    <a md-raised-button routerLink="/about/reactive-forms" routerLinkActive="active">REACTIVE-FORMS</a>
    <h2>about-main.component.ts</h2>
    <router-outlet></router-outlet>
  `,
  animations: [ slideAnimation ]
})
export class AboutMainComponent {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';
}
