import { Injectable, Type } from '@angular/core';

import { GoModalBindings, GoModalItem } from './go-modal.item';
import { Subject } from 'rxjs';
import { GoModalOptions } from './go-modal-options';

@Injectable()
export class GoModalService {
  activeModalComponent: Subject<GoModalItem<any>> = new Subject<GoModalItem<any>>();
  modalOpen: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.modalOpen.next(false);
  }

  /**
   * Opens an instance of the GoModal
   * @param component Component to be rendered inside of Modal
   * @param bindings Bindings for the Component being passed to the Modal. **Note: passing bindings for the Modal in this object is deprecated, use modalOptions instead.**
   * @param modalOptions Various configurations for the Modal.
   */
  openModal<T>(component: Type<T>, bindings: Partial<T> | GoModalBindings, modalOptions?: GoModalOptions): void {
    this.setComponent<T>(component, bindings, modalOptions);
    this.toggleModal(true);
  }

  setComponent<T>(component: Type<T>, bindings: Partial<T> | GoModalBindings, modalOptions?: GoModalOptions): void {
    if (modalOptions) {
      this.activeModalComponent.next({ component, bindings, modalOptions });
    } else {
      this.activeModalComponent.next({ component, bindings });
    }
  }

  toggleModal(open: boolean = true): void {
    this.modalOpen.next(open);
  }
}
