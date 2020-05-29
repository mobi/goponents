import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  BrandingMode,
  GoConfigInterface,
  LogoConfig,
  ThemeColors
} from './go-config.model';

@Injectable()
export class GoConfigService {
  private config: GoConfigInterface = {
    brandColor: ThemeColors.brand,
    brandingMode: BrandingMode.company,
    logoConfig: {
      logo: '',
      logoLink: ''
    }
  };

  /**
   * Configuration subject, you can subscribe to this to recieve change
   * updates when the global config changes.
   */
  config$: BehaviorSubject<GoConfigInterface> = new BehaviorSubject<GoConfigInterface> (this.config);

  /**
   * Use this method to specify a brand color to be used in all places where branding is applied
   * @param color The hexidecimal color for the brand
   */
  public setBrandColor(color: string): void {
    this.config.brandColor = color;
    this.setConfig(this.config);
  }

  /**
   * Use this method to change the logo configuration
   * @param logoConfig The new logoConfig to apply to the global config
   */
  public setLogo(logoConfig: Partial<LogoConfig>): void {
    this.config.logoConfig = logoConfig;
    this.setConfig(this.config);
  }

  /**
   * Sets the new global configuration. Use this method when
   * you need to set the configuration initially or to override the
   * current configuraiton.
   * @param config New config to be used
   */
  public setConfig(config: GoConfigInterface): void {
    this.config = Object.assign({}, config);
    this.config$.next(config);
  }

  /**
   * Use this method when you need to get the current config
   */
  public getConfig(): GoConfigInterface {
    return this.config;
  }
}
