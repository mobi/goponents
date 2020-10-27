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
import { GoModalDirective } from './go-modal.directive';
import { GoModalService } from './go-modal.service';

@Component({
  selector: 'go-modal',
  templateUrl: './go-modal.component.html',
  styleUrls: ['./go-modal.component.scss']
})
export class GoModalComponent implements OnInit, OnDestroy {
  readonly defaultModalSize: 'lg' | 'xl' = 'lg';

  currentComponent: any;
  modalTitle: string;
  modalSize: 'lg' | 'xl' = this.defaultModalSize;
  noContentPadding: boolean = false;
  opened: boolean = false;

  private destroy$: Subject<void> = new Subject();

  @ViewChild(GoModalDirective, { static: true }) goModalHost: GoModalDirective;
  @ViewChild('goModal', { static: true }) goModal: ElementRef<HTMLElement>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private goModalService: GoModalService
  ) {
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

    // set content padding if provided
    this.noContentPadding = componentRef.instance['noContentPadding'];
  }

  /**
   * Close modal when user clicks outside of the modal
   *
   * @param $event - Click event
   */
  backdropClick($event: MouseEvent): void {
    if ($event && this.goModal.nativeElement === $event.target) {
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
