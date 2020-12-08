import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GoModalOptions } from './go-modal-options';
import { GoModalDirective } from './go-modal.directive';
import { GoModalItem } from './go-modal.item';
import { GoModalService } from './go-modal.service';

@Component({
  selector: 'go-modal',
  templateUrl: './go-modal.component.html',
  styleUrls: ['./go-modal.component.scss']
})
export class GoModalComponent extends GoModalOptions implements OnInit, OnDestroy {

  currentComponent: GoModalItem<any>;
  opened: boolean = false;

  private destroy$: Subject<void> = new Subject();

  @ViewChild(GoModalDirective, { static: true }) goModalHost: GoModalDirective;
  @ViewChild('goModal', { static: true }) goModal: ElementRef<HTMLElement>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private goModalService: GoModalService
  ) {
    super();
  }

  ngOnInit(): void {
    this.goModalService.activeModalComponent
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: any) => {
        this.currentComponent = value;
        this.loadComponent();
      });

    this.goModalService.modalOpen
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => {
        this.opened = value;
        if (this.opened === false) {
          this.destroyComponent();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadComponent(): void {
    const componentFactory: ComponentFactory<{}> = this.componentFactoryResolver.resolveComponentFactory(this.currentComponent.component);
    const viewContainerRef: ViewContainerRef = this.goModalHost.viewContainerRef;

    const componentRef: ComponentRef<{}> = viewContainerRef.createComponent(componentFactory);

    Object.keys(this.currentComponent.bindings).forEach((key: string) => {
      componentRef.instance[key] = this.currentComponent.bindings[key];
    });

    this.setModalProperties(componentRef);
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

  private setModalProperties(componentRef: ComponentRef<{}>): void {
    if (this.currentComponent.modalOptions) {
      Object.keys(this.currentComponent.modalOptions).forEach((key: string) => {
        this[key] = this.currentComponent.modalOptions[key];
      });
    } else {
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
  }

  private destroyComponent(): void {
    this.goModalHost.viewContainerRef.clear();
  }
}
