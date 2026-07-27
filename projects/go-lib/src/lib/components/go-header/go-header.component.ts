import { Component, Input, OnDestroy } from '@angular/core';
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
  standalone: false,
  selector: 'go-header',
  templateUrl: './go-header.component.html',
  styleUrls: ['./go-header.component.scss']
})
export class GoHeaderComponent implements OnDestroy {

  brandColor: string;
  fontColor: string = ThemeColors.dark;
  @Input() theme: 'light' | 'dark' = 'light';
  logoConfig: Partial<LogoConfig> = { };
  menuBgHoverValue: string;
  menuBgHover: string;

  private minWidthBreakpoint: number = 768;
  private resizeObservable: Observable<Event> = fromEvent(window, 'resize');
  private resizeSubscription: Subscription;
  private configSubscription: Subscription;

  constructor (
    public sideNavService: GoSideNavService,
    private configService: GoConfigService
  ) {
    this.setMobileNav();
    this.setupResizeSubscription();
    this.setupConfig();
  }

  setupConfig(): void {
    this.configSubscription = this.configService.config
      .subscribe((value: GoConfigInterface) => {
        const config: GoConfigInterface = value || this.configService.getConfig();
        const brandColor: string = config?.brandColor || ThemeColors.brand;

        this.brandColor = brandColor;
        this.logoConfig = config?.logoConfig || { };

        if (config?.brandingMode === BrandingMode.company) {
          this.menuBgHoverValue = shadeHex(brandColor, -10);
          this.fontColor = ThemeColors.light;
        } else {
          this.brandColor = ThemeColors.light;
          this.menuBgHoverValue = shadeHex(ThemeColors.light, -10);
          this.fontColor = ThemeColors.dark;
        }
      });
  }

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }

    if (this.configSubscription) {
      this.configSubscription.unsubscribe();
    }
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
    if (!this.logoConfig?.logo) {
      return '';
    }

    return this.isNavCollapsed() ?
      this.logoConfig.logoCollapsed || this.logoConfig.logo :
      this.logoConfig.logo;
  }

  hasInternalLogoLink(): boolean {
    return Boolean(this.logoConfig?.logoLink) && !this.logoConfig?.useHref;
  }

  hasExternalLogoLink(): boolean {
    return Boolean(this.logoConfig?.logoLink) && Boolean(this.logoConfig?.useHref);
  }

  logoAltText(): string {
    return this.logoConfig?.altText || 'Application logo';
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
