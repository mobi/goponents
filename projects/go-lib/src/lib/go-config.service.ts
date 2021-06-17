import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  BrandingMode,
  GoConfigInterface,
  LogoConfig,
  ThemeColors,
  TinyMceConfig
} from './go-config.model';

@Injectable()
export class GoConfigService {
  private _config: GoConfigInterface = {
    brandColor: ThemeColors.brand,
    brandingMode: BrandingMode.company,
  };

  /**
   * Configuration subject, you can subscribe to this to recieve change
   * updates when the global config changes.
   */
  config: BehaviorSubject<GoConfigInterface> = new BehaviorSubject<GoConfigInterface> (this._config);

  /**
   * Use this method to specify a brand color to be used in all places where branding is applied
   * @param color The hexidecimal color for the brand
   */
  public setBrandColor(color: string): void {
    this._config.brandColor = color;
    this.setConfig(this._config);
  }

  /**
   * Use this method to specify a branding mode for the configuraiton
   * @param mode The branding mode to be used
   */
  public setBrandingMode(mode: BrandingMode): void {
    this._config.brandingMode = mode;
    this.setConfig(this._config);
  }

  /**
   * Use this method to change the logo configuration
   * @param logoConfig The new logoConfig to apply to the global config
   */
  public setLogo(logoConfig: Partial<LogoConfig>): void {
    this._config.logoConfig = logoConfig;
    this.setConfig(this._config);
  }

  /**
   * Use this method to change the TinyMCE configuration
   * @param tinyMceConfig The new tinyMceConfig to apply to the global config
   */
   public setTinyMce(tinyMceConfig: Partial<TinyMceConfig>): void {
    this._config.tinyMceConfig = tinyMceConfig;
    this.setConfig(this._config);
  }

  /**
   * Sets the new global configuration. Use this method when
   * you need to set the configuration initially or to override the
   * current configuraiton.
   * @param config New config to be used
   */
  public setConfig(config: Partial<GoConfigInterface>): void {
    if (!config.brandColor) { config.brandColor = this._config.brandColor; }
    if (!config.brandingMode) { config.brandingMode = this._config.brandingMode; }
    this._config = JSON.parse(JSON.stringify(config));
    this.config.next(this._config);
  }

  /**
   * Use this method when you need to get the current config
   */
  public getConfig(): GoConfigInterface {
    return this._config;
  }
}
