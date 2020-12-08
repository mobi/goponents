import { Type } from '@angular/core';
import { GoModalOptions } from './go-modal-options';

export interface GoModalBindings {
  /**
   * @deprecated use modalOptions instead
   */
  closeWithBackdrop?: boolean;
  /**
   * @deprecated use modalOptions instead
   */
  modalTitle?: string;
  /**
   * @deprecated use modalOptions instead
   */
  modalSize?: 'lg' | 'xl';
  /**
   * @deprecated use modalOptions instead
   */
  noContentPadding?: boolean;
  /**
   * @deprecated use modalOptions instead
   */
  showCloseIcon?: boolean;
}

export interface GoModalItem<T> {
  /**
   * The Angular Component to be rendered in the Modal.
   */
  component: Type<T>;
  /**
   * The bindings for the Component being rendered.
   */
  bindings: GoModalBindings | Partial<T>;
  /**
   * Various configuration options for this instance of the Modal.
   */
  modalOptions?: GoModalOptions;
}
