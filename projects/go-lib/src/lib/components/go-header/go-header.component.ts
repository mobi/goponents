import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilKeyChanged } from 'rxjs/operators';
import { GoConfigInterface } from '../../go-config.model';
import { GoConfigService } from '../../go-config.service';
import { GoSideNavService } from '../go-side-nav/go-side-nav/go-side-nav.service';

@Component({
  selector: 'go-header',
  templateUrl: './go-header.component.html',
  styleUrls: ['./go-header.component.scss']
})
export class GoHeaderComponent implements OnInit {

  @Input() altText: string = '';
  @Input() logo: string = '';

  @ViewChild('middleSection') middleSection: ElementRef;

  public brandColor: string;
  public brandColorIsDark: boolean = false;
  public menuIconVariant: string;

  private minWidthBreakpoint: number = 768;
  private resizeObservable: Observable<Event> = fromEvent(window, 'resize');
  private resizeSubsciption: Subscription;

  constructor (
    public sideNavService: GoSideNavService,
    private configService: GoConfigService
  ) {
    this.setMobileNav();
    this.setupResizeSubscription();
  }

  ngOnInit(): void {
    this.configService.config
      .pipe(distinctUntilKeyChanged('brandColor'))
      .subscribe((value: GoConfigInterface) => {
        this.brandColor = value.brandColor;
        this.brandColorIsDark = !this.configService.checkContrastRatioAccessibility(this.brandColor, '#313536');
        this.brandColorIsDark ? this.menuIconVariant = 'dark' : this.menuIconVariant = 'light';
      });
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
