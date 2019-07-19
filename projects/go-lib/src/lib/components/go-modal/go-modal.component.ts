import { Component, ComponentFactoryResolver, OnChanges, OnInit, ViewChild } from '@angular/core';

import { GoModalDirective } from './go-modal.directive';
import { GoModalService } from './go-modal.service';

@Component({
  selector: 'go-modal',
  templateUrl: './go-modal.component.html',
  styleUrls: ['./go-modal.component.scss']
})
export class GoModalComponent implements OnInit {
  currentComponent: any;
  opened: boolean = false;

  @ViewChild(GoModalDirective) goModalHost: GoModalDirective;
  @ViewChild('goModalContainer') goModalContainer: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private goModalService: GoModalService
  ) {
  }

  ngOnInit() {
    this.goModalService.activeModalComponent.subscribe((value) => {
      this.currentComponent = value;
      this.loadComponent();
    });

    this.goModalService.modalOpen.subscribe((value) => {
      this.opened = value;
    });
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentComponent.component);
    const viewContainerRef = this.goModalHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    Object.keys(this.currentComponent.bindings).forEach(key => {
      componentRef.instance[key] = this.currentComponent.bindings[key];
    });
  }

  closeModalContainer(event) {
    if (!this.goModalContainer.nativeElement.contains(event.target)) {
      this.closeModal();
    }
  }

  closeModal() {
    this.goModalService.toggleModal(false);
  }

  goModalClasses() {
    return { 'go-modal--visible': this.opened };
  }
}
