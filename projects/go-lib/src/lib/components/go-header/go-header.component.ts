import { Component, Input } from '@angular/core';
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

  private minWidthBreakpoint = 768;
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
