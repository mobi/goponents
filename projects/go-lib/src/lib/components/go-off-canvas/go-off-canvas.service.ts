import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/internal/Subject';
import { GoOffCanvasItem } from "./go-off-canvas.interface";

@Injectable({
  providedIn: 'root'
})
export class GoOffCanvasService {
  activeOffCanvasComponent: Subject<GoOffCanvasItem> = new Subject<GoOffCanvasItem>();
  offCanvasOpen: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.setOffCanvasStatus(false);
  }

  public openOffCanvas(offCanvasItem: GoOffCanvasItem): void {
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
