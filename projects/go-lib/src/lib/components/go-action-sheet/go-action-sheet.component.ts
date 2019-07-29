import { Component, Input, HostListener, ElementRef } from '@angular/core';
@Component({
  selector: 'go-action-sheet',
  templateUrl: './go-action-sheet.component.html',
  styleUrls: ['./go-action-sheet.component.scss']
})
export class GoActionSheetComponent {
  @Input() shiftLeft: boolean = false;

  
  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    this.closeActionSheetEvent(target);
  }

  showContent = false;
  
  constructor(
    private elementRef: ElementRef,
  ) { }

  triggerAS() {
    this.showContent = !this.showContent;
  }

  containerClass() {
    return {
      'go-action-sheet__content-container--active': this.showContent,
      'go-action-sheet__content-container--shift-left': this.shiftLeft
    }
  }

  private closeActionSheetEvent(target: HTMLElement): void {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.showContent = false;
    }
  }
}
