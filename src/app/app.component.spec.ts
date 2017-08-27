import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdButtonModule, MdMenuModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

const IMPORTS = [
  BrowserAnimationsModule,
  MdButtonModule,
  MdMenuModule,
  RouterTestingModule,
];

const DECLARATIONS = [
  AppComponent
];

describe('AppComponent', () =>  {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: IMPORTS,
      declarations: DECLARATIONS
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h1'));
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });
});
