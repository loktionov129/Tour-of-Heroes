import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './index';

@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations: [
    HomeMainComponent
  ],
  providers: []
})
export class HomeModule { }
