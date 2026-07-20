import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[goInputGroupPrepend]'
})
export class GoInputGroupPrependDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // If host is NOT a go-button, add the text addon styling
    const tagName = this.el.nativeElement.tagName?.toLowerCase();
    if (tagName !== 'go-button' && tagName !== 'button') {
      this.el.nativeElement.classList.add('go-form__input-group-text', 'go-form__input-group-text--prepend');
    } else {
      // For buttons, just add a positioning class
      this.el.nativeElement.classList.add('go-form__input-group-btn--prepend');
    }
  }
}
