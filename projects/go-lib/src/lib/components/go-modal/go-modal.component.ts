import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { GoModalDirective } from './go-modal.directive';
import { GoModalService } from './go-modal.service';

@Component({
  selector: 'go-modal',
  templateUrl: './go-modal.component.html',
  styleUrls: ['./go-modal.component.scss']
})
export class GoModalComponent implements OnInit {
  readonly defaultModalSize: 'lg' | 'xl' = 'lg';

  closeWithBackdrop: boolean = false;
  currentComponent: any;
  modalTitle: string;
  modalSize: 'lg' | 'xl' = this.defaultModalSize;
  noContentPadding: boolean = false;
  opened: boolean = false;
  showCloseIcon: boolean = true;

  @ViewChild(GoModalDirective, { static: true }) goModalHost: GoModalDirective;
  @ViewChild('goModal', { static: true }) goModal: ElementRef<HTMLElement>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private goModalService: GoModalService
  ) {
  }

  ngOnInit(): void {
    this.goModalService.activeModalComponent.subscribe((value: any) => {
      this.currentComponent = value;
      this.loadComponent();
    });

    this.goModalService.modalOpen.subscribe((value: boolean) => {
      this.opened = value;
      if (this.opened === false) {
        this.destroyComponent();
      }
    });
  }

  loadComponent(): void {
    const componentFactory: ComponentFactory<{}> = this.componentFactoryResolver.resolveComponentFactory(this.currentComponent.component);
    const viewContainerRef: ViewContainerRef = this.goModalHost.viewContainerRef;

    const componentRef: ComponentRef<{}> = viewContainerRef.createComponent(componentFactory);

    Object.keys(this.currentComponent.bindings).forEach((key: string) => {
      componentRef.instance[key] = this.currentComponent.bindings[key];
    });

    // Set title for modal if provided
    if (componentRef.instance['modalTitle']) {
      this.modalTitle = componentRef.instance['modalTitle'];
    } else {
      this.modalTitle = '';
    }

    // Set modal size if provided (by default set to 'lg')`
    if (componentRef.instance['modalSize'] === 'lg' || componentRef.instance['modalSize'] === 'xl') {
      this.modalSize = componentRef.instance['modalSize'];
    } else {
      this.modalSize = this.defaultModalSize;
    }

    // Set close with backdrop if provided
    this.closeWithBackdrop = componentRef.instance['closeWithBackdrop'] === true ? true : false;

    // set content padding if provided
    this.noContentPadding = componentRef.instance['noContentPadding'];

    // set close icon if provided
    this.showCloseIcon = componentRef.instance['showCloseIcon'] === false ? false : true;
  }

  /**
   * Close modal when user clicks outside of the modal
   *
   * @param $event - Click event
   */
  backdropClick($event: MouseEvent): void {
    if ($event && this.closeWithBackdrop && this.goModal.nativeElement === $event.target) {
      this.closeModal();
    }
  }

  closeModal(): void {
    this.goModalService.toggleModal(false);
  }

  goModalClasses(): object {
    return { 'go-modal--visible': this.opened };
  }

  private destroyComponent(): void {
    this.goModalHost.viewContainerRef.clear();
  }
}
