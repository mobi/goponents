import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[goInputGroupAppend]'
})
export class GoInputGroupAppendDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const tagName = this.el.nativeElement.tagName?.toLowerCase();
    if (tagName !== 'go-button' && tagName !== 'button') {
      this.el.nativeElement.classList.add('go-form__input-group-text', 'go-form__input-group-text--append');
    } else {
      this.el.nativeElement.classList.add('go-form__input-group-btn--append');
    }
  }
}
