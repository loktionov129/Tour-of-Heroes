import { Routes } from '@angular/router';
import { AboutMainComponent, MainInner1Component, MainInner2Component } from './index';
export const ROUTES: Routes = [{
  path: '',
  component: AboutMainComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: MainInner1Component
  }, {
    path: 'more',
    component: MainInner2Component
  }]
}];
