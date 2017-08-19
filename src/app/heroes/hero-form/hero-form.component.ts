import { Component, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../services';

@Component({
  selector: 'my-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {
  @Output() public add = new EventEmitter();
  public name = '';

  constructor(private heroService: HeroService) {}

  public create(): void {
    this.name = this.name.trim();
    if (!this.name) {
      return;
    }

    this.heroService.create(this.name)
      .then((res) => this.add.emit(res))
      .catch((err) => console.log('er', err));
  }
}
