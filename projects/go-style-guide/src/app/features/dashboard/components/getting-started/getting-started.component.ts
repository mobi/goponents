import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html'
})
export class GettingStartedComponent {

  installGoponents: string = `npm install @tangoe/goponents`;
  importStylesBase: string = `@import "~@tangoe/goponents/styles/styles"`;
  importStylesPartials: string = `@import "~@tangoe/goponents/styles/*"`;

  constructor() { }

}
