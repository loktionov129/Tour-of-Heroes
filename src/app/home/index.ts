import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './routes';

import components from './components';
import pages from './pages';

@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations: [
    ...components,
    ...pages
  ],
  providers: []
})
export class HomeModule { }
