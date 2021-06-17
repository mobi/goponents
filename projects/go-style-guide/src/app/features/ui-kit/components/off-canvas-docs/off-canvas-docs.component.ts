import { Component } from '@angular/core';
import { GoOffCanvasService } from '../../../../../../../go-lib/src/public_api';
import { BasicTestLargeComponent } from '../basic-test-large/basic-test-large.component';
import { BasicTestSubmitButtonComponent } from '../basic-test-submit-button/basic-test-submit-button.component';
import { BasicTestComponent } from '../basic-test/basic-test.component';

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
  openOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestComponent,
      bindings: {
        fakeTitle: 'Basic Off Canvas Component'
      },
      offCanvasOptions: {
        header: 'Test Header'
      }
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
  openOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestLargeComponent,
      bindings: {
        fakeTitle: 'Basic Off Canvas Component'
      },
      offCanvasOptions: {
        header: 'Test Header',
        size: 'large'
      }
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

  submitButtonInputs: string = `
  @Input() disabled: boolean = false; // A boolean which, when true, disables the button.
  @Input() text: string = 'Submit'; // The text to be displayed on the button.
  @Input() type: string = 'submit'; // Sets the button's type attribute.
  @Output() handleClick: EventEmitter<void> = new EventEmitter<void>(); // Emits an event when the button is clicked.
  `;

  submitButtonExampleHTML: string = `
  <!-- template of the component rendered in the off canvas -->
  <go-off-canvas-submit-button
    [text]="submitButtonText"
    [disabled]="submitDisabled"
    (handleClick)="submit()">
  </go-off-canvas-submit-button>
  `;

  submitButtonExampleTS: string = `
  submitButtonText: string = 'Apply Changes';
  submitDisabled: boolean = false;

  submit(): void {
    alert('Submitted!');
    this.goOffCanvasService.closeOffCanvas();
  }
  `;

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-off-canvas';

  constructor(
    private goOffCanvasService: GoOffCanvasService
  ) { }

  public openOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestComponent,
      bindings: {
        fakeTitle: 'Basic Off Canvas Component'
      },
      offCanvasOptions: {
        header: 'Test Header'
      }
    });
  }

  public openLargeOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestLargeComponent,
      bindings: {
        fakeTitle: 'Basic Off Canvas Component',
      },
      offCanvasOptions: {
        header: 'Test Header',
        size: 'large'
      }
    });
  }

  public openSubmitButtonOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: BasicTestSubmitButtonComponent,
      bindings: {
        fakeTitle: 'Basic Off Canvas Component'
      },
      offCanvasOptions: {
        header: 'Test Header'
      }
    });
  }

  public submit(): void {
    alert('Submit action called!');
    this.goOffCanvasService.closeOffCanvas();
  }

}
