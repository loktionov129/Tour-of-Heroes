import { Routes } from '@angular/router';
import { InitialResolver } from './router-resolve/initial.resolver';
import { AboutMainComponent, MainInner1Component,
  MainInner2Component, NgrxComponent, RComponent } from './index';

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
  }, {
    path: 'ngrx',
    component: NgrxComponent
  }, {
    path: 'router-resolve',
    component: RComponent,
    resolve: {
      initialData: InitialResolver
    }
  }]
}];
