import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GoConfigInterface } from '../../go-config.model';
import { GoConfigService } from '../../go-config.service';
import { GoSideNavService } from '../go-side-nav/go-side-nav/go-side-nav.service';

@Component({
  selector: 'go-header',
  templateUrl: './go-header.component.html',
  styleUrls: ['./go-header.component.scss']
})
export class GoHeaderComponent implements OnChanges {

  @Input() altText: string = '';
  @Input() logo: string = '';

  @ViewChild('middleSection') middleSection: ElementRef;

  public brandColor: string;
  public brandColorIsDark: boolean;

  private minWidthBreakpoint: number = 768;
  private resizeObservable: Observable<Event> = fromEvent(window, 'resize');
  private resizeSubscription: Subscription;

  constructor (
    public sideNavService: GoSideNavService,
    private configService: GoConfigService
  ) {
    this.setMobileNav();
    this.setupResizeSubscription();
  }

  ngOnChanges(): void {
    this.configService.config
      .pipe(distinctUntilChanged())
      .subscribe((value: GoConfigInterface) => {
        if (value.headerBrandingEnabled) {
          if (value.brandFontColor) {
            this.brandColor = value.brandColor;
            this.brandColorIsDark = value.brandFontColor === 'light';
          } else {
            this.handleBrandColorChange(value);
          }
        } else {
          this.brandColor = '';
          this.brandColorIsDark = false;
        }
      });
  }

  isNavCollapsed(): boolean {
    return window.innerWidth <= this.minWidthBreakpoint ? true : !this.sideNavService.navOpen;
  }

  getLogoBackground(): string | null {
    if (this.brandColor && !this.isNavCollapsed()) {
      return this.brandColor;
    } else {
      return null;
    }
  }

  toggleSideMenu(): void {
    this.sideNavService.toggleNav();
  }

  middleContentExists(): boolean {
    return this.middleSection.nativeElement.childElementCount > 0;
  }

  private setupResizeSubscription(): void {
    this.resizeSubscription = this.resizeObservable
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

  private handleBrandColorChange(value: GoConfigInterface): void {
    const baseDarkHex: string = '#313536';
    this.brandColor = value.brandColor;

    this.brandColorIsDark = !this.configService.contrastIsAccessible(this.brandColor, baseDarkHex);
  }
}
