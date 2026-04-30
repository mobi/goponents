import { Component } from '@angular/core';
import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';

@Component({
    imports: [DemoImportsModule],
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
})
export class GettingStartedComponent {

  installGoponents: string = `npm install goponents`;
  importStylesBase: string = `@import "~goponents/styles/styles"`;
  importStylesPartials: string = `@import "~goponents/styles/*"`;

  constructor() { }

}
