import { Component } from '@angular/core';

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    standalone: false
})
export class GettingStartedComponent {

  installGoponents: string = `npm install goponents`;
  importStylesBase: string = `@import "~goponents/styles/styles"`;
  importStylesPartials: string = `@import "~goponents/styles/*"`;

  constructor() { }

}
