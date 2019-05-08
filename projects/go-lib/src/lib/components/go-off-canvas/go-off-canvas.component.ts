import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { GoOffCanvasDirective } from './go-off-canvas.directive';
import { GoOffCanvasService } from './go-off-canvas.service';
import { GoOffCanvasItem } from './go-off-canvas.interface';

import { fadeAnimation } from '../../animations/fade.animation';
import { offCanvasAnimation } from '../../animations/off-canvas.animation';

@Component({
  selector: 'go-off-canvas',
  templateUrl: './go-off-canvas.component.html',
  styleUrls: [
    './go-off-canvas.component.scss'
  ],
  animations: [
    fadeAnimation,
    offCanvasAnimation
  ]
})
export class GoOffCanvasComponent implements OnInit {
  currentOffCanvasItem: GoOffCanvasItem;
  opened: boolean = false;

  @ViewChild(GoOffCanvasDirective) goOffCanvasHost: GoOffCanvasDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private goOffCanvasService: GoOffCanvasService
  ) { }

  ngOnInit(): void {
    this.goOffCanvasService.activeOffCanvasComponent.subscribe((goOffCanvasItem) => {
      this.currentOffCanvasItem = goOffCanvasItem;
      this.loadComponent();
    });

    this.goOffCanvasService.offCanvasOpen.subscribe((value) => {
      this.opened = value;
    });
  }

  public closeOffCanvas(): void {
    this.goOffCanvasService.closeOffCanvas();
  }

  private loadComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.currentOffCanvasItem.component
    );
    const viewContainerRef = this.goOffCanvasHost.viewContainerRef;

    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);

    Object.keys(this.currentOffCanvasItem.bindings).forEach(key => {
      componentRef.instance[key] = this.currentOffCanvasItem.bindings[key];
    });
  }
}
