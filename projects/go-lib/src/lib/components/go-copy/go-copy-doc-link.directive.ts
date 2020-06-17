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
    // TODO: need to remove previous id, if there is one, before adding new one
    this.baseComponent.text = `${window.location.href}/#${this.cardId}`;
  }

}
