import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { GoOffCanvasDirective } from './go-off-canvas.directive';
import { GoOffCanvasService } from './go-off-canvas.service';
import { GoOffCanvasItem } from './go-off-canvas.interface';

@Component({
  selector: 'go-off-canvas',
  templateUrl: './go-off-canvas.component.html',
  styleUrls: [
    './go-off-canvas.component.scss'
  ],
  animations: [
    trigger('fade', [
      state('in', style({
        opacity: 1,
        visibility: 'visible'
      })),
      state('out', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('in <=> out', [
        animate('.5s cubic-bezier(.25, .8, .25, 1)')
      ])
    ]),
    trigger('slide', [
      state('in', style({
        transform: 'translateX(-300px)'
      })),
      state('out', style({
        transform: 'translateX(0)'
      })),
      transition('in <=> out', [
        animate('.5s cubic-bezier(.25, .8, .25, 1)')
      ])
    ])
  ]
})
export class GoOffCanvasComponent implements OnInit {
  currentOffCanvasItem: GoOffCanvasItem;
  opened: boolean = false;

  @ViewChild(GoOffCanvasDirective) goOffCanvasHost: GoOffCanvasDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private goOffCanvasService: GoOffCanvasService
  ){}

  ngOnInit(): void {
    this.goOffCanvasService.activeOffCanvasComponent.subscribe((goOffCanvasItem) => {
      this.currentOffCanvasItem = goOffCanvasItem;
      this.loadComponent();
    });

    this.goOffCanvasService.offCanvasOpen.subscribe((value) => {
      this.opened = value;
    });
  }

  loadComponent(): void {
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

  closeOffCanvas() : void {
    this.goOffCanvasService.setOffCanvasStatus(false);
  }
}
