import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TodoRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main';

@NgModule({
  imports: [
    SharedModule,
    TodoRoutingModule
  ],
  declarations: [
    HomeMainComponent
  ],
  providers: []
})
export class HomeModule { }
