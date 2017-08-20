import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent, MainInner1Component, MainInner2Component } from './index';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [
    AboutMainComponent, MainInner1Component, MainInner2Component
  ],
  providers: []
})
export class AboutModule { }
