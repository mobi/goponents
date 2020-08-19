import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-docs',
  templateUrl: './portal-docs.component.html'
})
export class PortalDocsComponent {
  noteMessage: string = `For this example, the component we want to render in the off canvas is "BasicTestComponent",
  but we can follow the same pattern to render any component inside of the off canvas.`;

  appModuleImport: string = `
  import { GoOffCanvasModule } from '@tangoe/goponents';

  @NgModule({
    declarations: [AppComponent],
    imports: [
      GoOffCanvasModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  uiKitExample: string = `
  import { GoOffCanvasModule, GoOffCanvasService } from '@tangoe/goponents';
  import { BasicTestComponent } from './components/basic-test/basic-test.component';

  @NgModule({
    imports: [
      GoOffCanvasModule
    ],
    declarations: [
      BasicTestComponent
    ],
    entryComponents: [
      BasicTestComponent
    ],
    providers: [
      GoOffCanvasService
    ]
  })
  export class UiKitModule { }
  `;

  implementationExample: string = `
  import { GoOffCanvasService } from '@tangoe/goponents';
  import { BasicTestComponent } from '../basic-test/basic-test.component';

  constructor(private goOffCanvasService: GoOffCanvasService) { }
  `;

  functionExample: string = `
  openOffCanvas() : void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestComponent,
      bindings: {
        someBinding: 'monkey'
      },
      header: 'Test Header'
    });
  }
  `;

  htmlExample: string = `
  <go-button
    (handleClick)="openOffCanvas()"
    buttonIcon="subdirectory_arrow_right"
    buttonVariant="positive">
    Open Off Canvas
  </go-button>
  `;

  constructor(

  ) { }

  public openOffCanvas(): void {
  
  }
}
