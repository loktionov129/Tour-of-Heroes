import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../services';
import { Hero } from '../hero';

@Component({
  providers: [HeroService],
  selector: 'rf-form',
  template: `<form (ngSubmit)="onAdd($event);" [formGroup]="heroForm">
    <input name="name" placeholder="hero name" formControlName="name" autocomplete="off"><br>
    <input name="age" placeholder="hero age" formControlName="age" autocomplete="off"><br>
    <button type="submit" [disabled]="false">add</button>
  </form>
  <p>Form status: {{ heroForm.status | json }}</p>
  <p>Form value: {{ heroForm.value | json }}</p>
  <br><br>
  `
})
export class RFFormComponent implements OnInit {
  public heroForm: FormGroup;
  constructor(private heroService: HeroService, private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.heroForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/(\w|\s|[\.\'-])+/)]],
      age: ['', [Validators.required, Validators.pattern(/^([5-9]\d*)|[1-9]\d+$/)]]
    });
  }

  public onAdd(): void {
    console.log('send new hero', this.heroForm);
    this.heroService.add(this.heroForm.value as Hero);
    this.heroForm.reset();
  }
}
