import { Directive, ElementRef, Host, Input, OnInit } from '@angular/core';
import { GoCopyComponent } from './go-copy.component';

@Directive({
  selector: '[goCopyDocLink]'
})
export class GoCopyDocLinkDirective implements OnInit {

  @Input() cardId: string;

  constructor(
    private elementRef: ElementRef,
    @Host() private baseComponent: GoCopyComponent
  ) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('go-copy--card-header');
    this.elementRef.nativeElement.title = 'Copy the URL to this card';
    this.setGoCopyText();
  }

  setGoCopyText(): void {
    /**
     * If the current url already has an id selector, remove it before adding a new one.
     */
    const currentUrl: string = window.location.href;
    const endIndex: number = currentUrl.includes('#') ? currentUrl.lastIndexOf('#') : currentUrl.length;
    const urlToCopy: string = `${window.location.href.substr(0, endIndex)}/#${this.cardId}`;
    this.baseComponent.text = urlToCopy;
  }

}
