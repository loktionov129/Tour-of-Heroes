import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main';

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
