export class GoModalOptions {
  readonly defaultModalSize?: 'lg' | 'xl' = 'lg';

  /**
   * Whether or not the modal closes when the user clicks on the backdrop
   */
  closeWithBackdrop?: boolean = false;
  /**
   * The title for the modal.
   */
  modalTitle?: string;
  /**
   * The general size for the modal.
   */
  modalSize?: 'lg' | 'xl' = this.defaultModalSize;
  /**
   * Whether or not to render padding on the content section of the modal.
   */
  noContentPadding?: boolean = false;
  /**
   * Whether or not to show the close icon of the modal.
   */
  showCloseIcon?: boolean = true;
}
