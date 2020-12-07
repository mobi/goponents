import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GoOffCanvasItem } from './go-off-canvas.interface';

@Injectable({
  providedIn: 'root'
})
export class GoOffCanvasService {
  activeOffCanvasComponent: Subject<GoOffCanvasItem<any>> = new Subject<GoOffCanvasItem<any>>();
  offCanvasOpen: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.setOffCanvasStatus(false);
  }

  /**
   * Opens an instance of the GoOffCanvas
   * @param offCanvasItem Configuration for the Off Canvas.
   */
  public openOffCanvas<T>(offCanvasItem: GoOffCanvasItem<T>): void {
    this.activeOffCanvasComponent.next(offCanvasItem);
    this.setOffCanvasStatus(true);
  }

  public closeOffCanvas(): void {
    this.setOffCanvasStatus(false);
  }

  private setOffCanvasStatus(isOpen: boolean = true): void {
    this.offCanvasOpen.next(isOpen);
  }
}
