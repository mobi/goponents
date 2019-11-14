import { Component } from '@angular/core';

import { GoModalService } from '../../../../../../../go-lib/src/public_api';

import { ModalTestComponent } from '../modal-test/modal-test.component';

@Component({
  selector: 'app-modal-docs',
  templateUrl: './modal-docs.component.html'
})
export class ModalDocsComponent {

  pageTitle: string = 'Modal';

  appModuleImport: string = `
  import { GoModalModule } from '@tangoe/goponents';

  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      GoModalModule
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;

  ex_UiKitModule: string = `
  import { GoModalModule, GoModalService } from '@tangoe/goponents';

  import { ModalDocsComponent } from './components/modal-docs/modal-docs.component';
  import { ModalTestComponent } from './components/modal-test/modal-test.component';

  @NgModule({
    imports: [
      GoModalModule
    ],
    declarations: [
      ModalDocsComponent,
      ModalTestComponent
    ],
    entryComponents: [
      ModalTestComponent
    ],
    providers: [
      GoModalService
    ]
  })

  export class UiKitModule { }
  `;

  ex_ModalDocsImports: string = `
  import { GoModalService } from '@tangoe/goponents';
  import { ModalTestComponent } from '../modal-test/modal-test.component';

  constructor(private goModalService: GoModalService) { }
  `;

  ex_ModalDocsOpenModal: string = `
  openModal() {
    this.goModalService.openModal(ModalTestComponent, { modalTitle: 'Example Title', modalSize: 'xl', content: 'This is a modal!' });
  }
  `;

  ex_ModalDocsHtml: string = `<go-button (handleClick)="openModal()">Click Me</go-button>`;

  constructor(private goModalService: GoModalService) { }

  openModal(): void {
    this.goModalService.openModal(ModalTestComponent, { modalTitle: 'Example Title', modalSize: 'xl', content: 'This is a modal!' });
  }

}
