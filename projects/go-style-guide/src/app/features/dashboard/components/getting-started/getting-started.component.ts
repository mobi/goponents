import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html'
})
export class GettingStartedComponent {

  installGoponents: string = `npm install @tangoe/goponents`;
  installGosheets: string = `npm install @tangoe/gosheets`;
  installGosheetsVersion: string = `npm install @tangoe/gosheets@1.0.0`;
  importGosheetsBase: string = `@import "~@tangoe/gosheets/gosheets"`;
  importGosheetsPartials: string = `@import "~@tangoe/gosheets/base/*"`;

  constructor() { }

}
