import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss').toString()]
})
export class AppComponent {
    public title = 'Tour of Heroes';
}
