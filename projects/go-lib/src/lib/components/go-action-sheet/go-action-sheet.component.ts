import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'go-action-sheet',
  templateUrl: './go-action-sheet.component.html',
  styleUrls: ['./go-action-sheet.component.scss']
})
export class GoActionSheetComponent {
  showContent: boolean = false;

  // TODO: support more placement options and add placement validation (i.e. supported value was passed in)
  @Input() placement: 'bottom' | 'right' = 'bottom';
  @Input() shiftLeft: boolean = false;


  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement): void {
    this.closeActionSheetEvent(target);
  }


  constructor(
    private elementRef: ElementRef,
  ) { }

  triggerAS(): void {
    this.showContent = !this.showContent;
  }

  containerClass(): object {
    return {
      'go-action-sheet__content-container--active': this.showContent,
      'go-action-sheet__content-container--shift-left': this.shiftLeft,
      'go-action-sheet__content-container--placement-bottom': this.placement === 'bottom',
      'go-action-sheet__content-container--placement-right': this.placement === 'right'
    };
  }

  private closeActionSheetEvent(target: HTMLElement): void {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.showContent = false;
    }
  }
}
