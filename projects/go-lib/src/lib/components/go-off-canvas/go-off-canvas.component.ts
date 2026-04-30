import {
  Component,
  ComponentRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fadeAnimation } from '../../animations/fade.animation';
import { offCanvasAnimation } from '../../animations/off-canvas.animation';
import { GoOffCanvasOptions } from './go-off-canvas-options';
import { GoOffCanvasDirective } from './go-off-canvas.directive';
import { GoOffCanvasItem } from './go-off-canvas.interface';
import { GoOffCanvasService } from './go-off-canvas.service';

import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoPortalModule } from '../go-portal/go-portal.module';
@Component({
    selector: 'go-off-canvas',
    templateUrl: './go-off-canvas.component.html',
    styleUrls: [
        './go-off-canvas.component.scss'
    ],
    animations: [
        fadeAnimation,
        offCanvasAnimation
    ],
  imports: [CommonModule, GoIconButtonModule, GoPortalModule],
})
export class GoOffCanvasComponent extends GoOffCanvasOptions implements OnInit, OnDestroy {
  currentOffCanvasItem: GoOffCanvasItem<any>;
  opened: boolean = false;
  screenWidth: number;

  private destroy$: Subject<void> = new Subject();

  @ViewChild(GoOffCanvasDirective, { static: true }) goOffCanvasHost: GoOffCanvasDirective;

  @HostListener('window:resize')
  onResize(): void {
    this.screenWidth = window.innerWidth;
  }

  constructor(
    private goOffCanvasService: GoOffCanvasService
  ) {
    super();
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    this.goOffCanvasService.activeOffCanvasComponent
      .pipe(takeUntil(this.destroy$))
      .subscribe((goOffCanvasItem: GoOffCanvasItem<any>) => {
        this.currentOffCanvasItem = goOffCanvasItem;
        this.loadComponent();
      });

    this.goOffCanvasService.offCanvasOpen
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => {
        this.opened = value;
        if (this.opened === false) {
          this.destroyComponent();
          this.resetDefaults();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  closeOffCanvas(): void {
    this.goOffCanvasService.closeOffCanvas();
  }

  getOffCanvasWidth(): string {
    if (this.screenWidth > 768) {
      return this.size === 'large' ? '75vw' : '350px';
    } else {
      return '100vw';
    }
  }

  private loadComponent(): void {
    const viewContainerRef: ViewContainerRef = this.goOffCanvasHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef: ComponentRef<any> = viewContainerRef.createComponent(
      this.currentOffCanvasItem.component
    );

    Object.keys(this.currentOffCanvasItem.bindings).forEach((key: string) => {
      componentRef.instance[key] = this.currentOffCanvasItem.bindings[key];
    });

    this.setOffCanvasProperties();
  }

  private resetDefaults(): void {
    const options: GoOffCanvasOptions = new GoOffCanvasOptions();
    Object.keys(options).forEach((key: string) => {
      this[key] = options[key];
    });
  }

  private setOffCanvasProperties(): void {
    if (this.currentOffCanvasItem.offCanvasOptions) {
      Object.keys(this.currentOffCanvasItem.offCanvasOptions).forEach((key: string) => {
        this[key] = this.currentOffCanvasItem.offCanvasOptions[key];
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      this.size = this.currentOffCanvasItem.size || 'small';
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      this.header = this.currentOffCanvasItem.header;
    }
  }

  private destroyComponent(): void {
    this.goOffCanvasHost.viewContainerRef.clear();
  }
}
