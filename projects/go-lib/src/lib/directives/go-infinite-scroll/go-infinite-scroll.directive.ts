import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DataSource, GoInfiniteScrollConfig } from './go-infinite-scroll-config.model';
import { GoInfiniteScrollService } from './go-infinite-scroll.service';

@Directive({
  selector: '[goInfiniteScroll]'
})
export class GoInfiniteScrollDirective {
  element: ElementRef;

  @Input() config: GoInfiniteScrollConfig = new GoInfiniteScrollConfig();
  @Output() scrolledToBottom: EventEmitter<null> = new EventEmitter();

  @HostListener('scroll') scroll(): void {
    if (!this.infiniteScrollService.dataComplete[this.config.identifier]) {
      const amountScrolled: number = this.element.nativeElement.scrollTop + this.element.nativeElement.offsetHeight;
      if (amountScrolled >= this.element.nativeElement.scrollHeight - 100) {
        this.loadMore();
      }
    }
  }

  constructor(
    elementRef: ElementRef,
    private infiniteScrollService: GoInfiniteScrollService
  ) {
    this.element = elementRef;
  }

  loadMore(): void {
    this.infiniteScrollService.setDataComplete(this.config, true);
    if (this.config.dataMode === DataSource.server) {
      this.scrolledToBottom.emit();
    } else {
      this.infiniteScrollService.loadMoreClient(this.config);
    }
  }
}
