import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GoSideNavService } from '../go-side-nav/go-side-nav/go-side-nav.service';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'go-header',
  templateUrl: './go-header.component.html',
  styleUrls: ['./go-header.component.scss']
})
export class GoHeaderComponent {

  @Input() altText: string = '';
  @Input() logo: string = '';

  @ViewChild('middleSection') middleSection: ElementRef;

  private minWidthBreakpoint: number = 768;
  private resizeObservable: Observable<Event> = fromEvent(window, 'resize');
  private resizeSubsciption: Subscription;

  constructor(public sideNavService: GoSideNavService) {
    this.setMobileNav();
    this.setupResizeSubscription();
  }

  isNavCollapsed(): boolean {
    return window.innerWidth <= this.minWidthBreakpoint ? true : !this.sideNavService.navOpen;
  }

  toggleSideMenu(): void {
    this.sideNavService.toggleNav();
  }

  middleContentExists(): boolean {
    return this.middleSection.nativeElement.childElementCount > 0;
  }

  private setupResizeSubscription(): void {
    this.resizeSubsciption = this.resizeObservable
      .pipe(debounceTime(250))
      .subscribe(event => {
        this.setMobileNav();
    });
  }

  private setMobileNav(): void {
    if (window.innerWidth <= this.minWidthBreakpoint) {
      this.sideNavService.navOpen = false;
    }
  }
}
