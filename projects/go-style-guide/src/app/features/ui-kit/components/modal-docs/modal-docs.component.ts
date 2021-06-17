import { Component } from '@angular/core';

import { GoModalService } from '../../../../../../../go-lib/src/public_api';

import { ModalTestComponent } from '../modal-test/modal-test.component';

@Component({
  selector: 'app-modal-docs',
  templateUrl: './modal-docs.component.html'
})
export class ModalDocsComponent {

  pageTitle: string = 'Modal';

  componentBindings: string = `
  closeWithBackdrop?: boolean = false;
  modalTitle: string = '';
  modalSize: 'lg' | 'xl' = 'lg';
  noContentPadding?: boolean = false;
  showCloseIcon?: boolean = true;
  `;

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
    this.goModalService.openModal(ModalTestComponent, {
      content: 'This is a modal!'
    }, {
      modalTitle: 'Example Title'
    };
  }
  `;

  ex_ModalDocsHtml: string = `<go-button (handleClick)="openModal()">Click Me</go-button>`;

  ex_ModalDocsOpenLgModal: string = `
  this.goModalService.openModal(ModalTestComponent, {
    content: 'This is a lg modal'
  }, {
    modalTitle: 'LG Modal (Default)'
  });
  `;

  ex_ModalDocsOpenXlModal: string = `
  this.goModalService.openModal(ModalTestComponent, {
    content: 'This is a xl modal'
  }, {
    modalTitle: 'XL Modal',
    modalSize: 'xl'
  });
  `;

  ex_ModalDocsNoPadding: string = `
  this.goModalService.openModal(ModalTestComponent, {
    content: 'This area has no padding'
  }, {
    modalTitle: 'No Padding Example',
    noContentPadding: true
  });
  `;

  ex_ModalDocsCloseWithBackdrop: string = `
  this.goModalService.openModal(ModalTestComponent, {
    content: 'You can close this modal by clicking on the page outside of the modal'
  }, {
    modalTitle: 'Close With Backdrop Example',
    closeWithBackdrop: true
  });
  `;

  ex_ModalDocsNoCloseIcon: string = `
  this.goModalService.openModal(ModalTestComponent, {
    content: 'The only way to close this modal is by clicking outside of the modal on the backdrop'
  }, {
    modalTitle: 'Close With Backdrop Example',
    closeWithBackdrop: true,
    showCloseIcon: false
  });
  `;

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-modal';

  constructor(private goModalService: GoModalService) { }

  openModal(): void {
    this.goModalService.openModal(ModalTestComponent, {
      content: 'This is a modal!'
    }, {
      modalTitle: 'Example Title'
    });
  }

  openLgModal(): void {
    this.goModalService.openModal(ModalTestComponent, {
      content: 'This is a lg modal'
    }, {
      modalTitle: 'LG Modal (Default)'
    });
  }

  openXlModal(): void {
    this.goModalService.openModal(ModalTestComponent, {
      content: 'This is a xl modal'
    }, {
      modalTitle: 'XL Modal',
      modalSize: 'xl'
    });
  }

  openNoPaddingModal(): void {
    this.goModalService.openModal(ModalTestComponent, {
      content: 'This area has no padding'
    }, {
      modalTitle: 'No Padding Example',
      noContentPadding: true
    });
  }

  openCloseWithBackdropModal(): void {
    this.goModalService.openModal(ModalTestComponent, {
      content: 'You can close this modal by clicking on the page outside of the modal'
    }, {
      modalTitle: 'Close With Backdrop Example',
      closeWithBackdrop: true
    });
  }

  openNoCloseIconModal(): void {
    this.goModalService.openModal(ModalTestComponent, {
      content: 'The only way to close this modal is by clicking outside of the modal on the backdrop'
    }, {
      modalTitle: 'Close With Backdrop Example',
      closeWithBackdrop: true,
      showCloseIcon: false
    });
  }

}
