import { Injectable } from '@angular/core';

import { GoModalItem } from './go-modal.item';
import { Subject } from 'rxjs';

@Injectable()
export class GoModalService {
  activeModalComponent: Subject<GoModalItem> = new Subject<GoModalItem>();
  modalOpen: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.modalOpen.next(false);
  }

  openModal(component: any, bindings: {}): void {
    this.setComponent(component, bindings);
    this.toggleModal(true);
  }

  setComponent(component: any, bindings: {}): void {
    this.activeModalComponent.next(new GoModalItem(component, bindings));
  }

  toggleModal(open: boolean = true): void {
    this.modalOpen.next(open);
  }
}
