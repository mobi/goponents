import { Component, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GoConfigService } from '../../go-config.service';
import { GoSideNavService } from '../go-side-nav/go-side-nav/go-side-nav.service';
import { shadeHex } from '../../utilities/colors.util';
import {
  BrandingMode,
  GoConfigInterface,
  LogoConfig,
  ThemeColors
} from '../../go-config.model';

@Component({
  selector: 'go-header',
  templateUrl: './go-header.component.html',
  styleUrls: ['./go-header.component.scss']
})
export class GoHeaderComponent implements OnDestroy {

  brandColor: string;
  fontColor: string = ThemeColors.dark;
  logoConfig: Partial<LogoConfig>;
  menuBgHoverValue: string;
  menuBgHover: string;

  private minWidthBreakpoint: number = 768;
  private resizeObservable: Observable<Event> = fromEvent(window, 'resize');
  private resizeSubscription: Subscription;

  constructor (
    public sideNavService: GoSideNavService,
    private configService: GoConfigService
  ) {
    this.setMobileNav();
    this.setupResizeSubscription();
    this.setupConfig();
  }

  setupConfig(): void {
    this.configService.config$
      .subscribe((value: GoConfigInterface) => {
        this.brandColor = value.brandColor;
        this.logoConfig = value.logoConfig;

        if (value.brandingMode === BrandingMode.company) {
          this.menuBgHoverValue = shadeHex(value.brandColor, -10);
          this.fontColor = ThemeColors.light;
        } else {
          this.brandColor = ThemeColors.light;
          this.menuBgHoverValue = shadeHex(ThemeColors.light, -10);
          this.fontColor = ThemeColors.dark;
        }
      });
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
    this.configService.config$.unsubscribe();
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

  getLogo(): string {
    return this.isNavCollapsed() ?
      this.logoConfig.logoCollapsed || this.logoConfig.logo :
      this.logoConfig.logo;
  }

  enableMenuHover(): void {
    this.menuBgHover = this.menuBgHoverValue;
  }

  disableMenuHover(): void {
    this.menuBgHover = null;
  }

  private setupResizeSubscription(): void {
    this.resizeSubscription = this.resizeObservable
      .pipe(debounceTime(250))
      .subscribe(() => {
        this.setMobileNav();
    });
  }

  private setMobileNav(): void {
    if (window.innerWidth <= this.minWidthBreakpoint) {
      this.sideNavService.navOpen = false;
    }
  }
}
