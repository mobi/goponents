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

  /**
   * Sets the text property on the go-copy component to the url that leads to the current doc example.
  */
  private setGoCopyText(): void {
    /**
     * If the current url already has an id selector at the end,
     * remove it before adding an id selector to the urlToCopy.
     */
    const currentUrl: string = window.location.href;
    const endOfBaseUrlIndex: number = currentUrl.includes('#') ? currentUrl.lastIndexOf('#') : currentUrl.length;
    const baseUrl: string = currentUrl.substr(0, endOfBaseUrlIndex);
    const urlToCopy: string = `${baseUrl}/#${this.cardId}`;
    this.baseComponent.text = urlToCopy;
  }

}
