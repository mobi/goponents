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

        console.log('value', value);
        this.brandColorIsDark = !this.checkContrastRatio(this.brandColor, '#313536');
        console.log('brandColorIsDark', this.brandColorIsDark);
        this.brandColorIsDark ? this.menuIconVariant = 'dark' : this.menuIconVariant = 'light';
        console.log('menuIconVariant', this.menuIconVariant);
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

  // TODO: extract this methods into config service
  hexToRgb(hex) {
    const result: RegExpExecArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  rgbToHex(rgb) {
    const hex = '#' + this.componentToHex(rgb['r']) + this.componentToHex(rgb['g']) + this.componentToHex(rgb['b']);
    return hex;
  }

  luminanace(r, g, b) {
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
        ? v / 12.92
        : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  contrast(rgb1, rgb2) {
    const luminanace1 = this.luminanace(rgb1['r'], rgb1['g'], rgb1['b']) + 0.05;
    const luminanace2 = this.luminanace(rgb2['r'], rgb2['g'], rgb2['b']) + 0.05;

    return (this.luminanace(rgb1['r'], rgb1['g'], rgb1['b']) + 0.05)
         / (this.luminanace(rgb2['r'], rgb2['g'], rgb2['b']) + 0.05);
  }

  checkContrastRatio(hex1, hex2) {
    let contrastIsAccessible: boolean;

    const rgb1 = this.hexToRgb(hex1);
    const rgb2 = this.hexToRgb(hex2);

    const contrast = this.contrast(rgb1, rgb2);
    console.log('contrast', contrast);

    if (contrast < 4.5) {
      contrastIsAccessible = false;
    } else {
      contrastIsAccessible = true;
    }

    return contrastIsAccessible;
  }
}
