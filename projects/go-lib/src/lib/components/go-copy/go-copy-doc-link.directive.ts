import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[goCopyDocLink]'
})
export class GoCopyDocLinkDirective implements OnInit {

  @Output() url: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) {
    this.url.emit(this.router.url);
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('go-copy--card-header');
  }

}
