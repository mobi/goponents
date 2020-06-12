import { Directive, ElementRef, Host, OnInit } from '@angular/core';
import { GoCopyComponent } from './go-copy.component';

@Directive({
  selector: '[goCopyDocLink]'
})
export class GoCopyDocLinkDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    @Host() private baseComponent: GoCopyComponent
  ) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('go-copy--card-header');
    this.elementRef.nativeElement.title = 'Copy the url to this card';
    this.baseComponent.text = window.location.href;
  }

}
