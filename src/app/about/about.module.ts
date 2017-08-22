import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroEffects } from './ngrx/store/hero.effects';
import { heroReducer } from './ngrx/store/hero.reducer';
import { HeroService } from './ngrx/services';
import { HeroServiceForResolver } from './router-resolve/services';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent, MainInner1Component,
  MainInner2Component, NgrxComponent,
  NgrxFormComponent, NgrxListComponent,
  RComponent, RFormComponent, RListComponent,
  RFComponent, RFFormComponent, RFListComponent } from './index';
import { SharedModule } from '../shared/shared.module';
import { InitialResolver } from './router-resolve/initial.resolver';

@NgModule({
  imports: [
    AboutRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpModule,
    StoreModule.provideStore({ heroes: heroReducer }),
    EffectsModule.run(HeroEffects)
  ],
  declarations: [
    AboutMainComponent, MainInner1Component,
    MainInner2Component, NgrxComponent,
    NgrxFormComponent, NgrxListComponent,
    RComponent, RFormComponent, RListComponent,
    RFComponent, RFFormComponent, RFListComponent
  ],
  providers: [ HeroService, HeroServiceForResolver, InitialResolver ]
})
export class AboutModule { }
