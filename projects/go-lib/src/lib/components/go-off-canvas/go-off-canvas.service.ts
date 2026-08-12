import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { GoOffCanvasItem } from './go-off-canvas.interface';

@Injectable({
  providedIn: 'root'
})
export class GoOffCanvasService {
  // Replay the latest open request for subscribers that initialize slightly later.
  activeOffCanvasComponent: ReplaySubject<GoOffCanvasItem<any>> = new ReplaySubject<GoOffCanvasItem<any>>(1);
  offCanvasOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

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
