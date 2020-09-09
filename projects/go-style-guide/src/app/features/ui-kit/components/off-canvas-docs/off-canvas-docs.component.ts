import { Component } from '@angular/core';
import { GoOffCanvasService } from '../../../../../../../go-lib/src/public_api';

import { BasicTestComponent } from '../basic-test/basic-test.component';
import {BasicTestLargeComponent} from '../basic-test-large/basic-test-large.component';

@Component({
  selector: 'app-off-canvas-docs',
  templateUrl: './off-canvas-docs.component.html'
})
export class OffCanvasDocsComponent {
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

  largeOffCanvasExample: string = `
  openOffCanvas() : void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestComponent,
      bindings: {
        someBinding: 'monkey'
      },
      header: 'Test Header',
      size: 'large'
    });
  }
  `;

  headerExample: string = `
  <!-- template of the component rendered in the large off canvas -->
  <go-off-canvas-header>
    <!-- this will be rendered in the header -->
    <go-button (handleClick)="closeOffCanvas()">Close</go-button>
  </go-off-canvas-header>
  <div>This will render in the off canvas as usual</div>
  `;

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-off-canvas';

  constructor(
    private goOffCanvasService: GoOffCanvasService
  ) { }

  public openOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestComponent,
      bindings: {
        someBinding: 'Basic Off Canvas Component'
      },
      header: 'Test Header'
    });
  }

  public openLargeOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestLargeComponent,
      bindings: {
        someBinding: 'Basic Off Canvas Component'
      },
      header: 'Test Header',
      size: 'large'
    });
  }

}
