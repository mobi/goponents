import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GoConfigInterface } from './go-config.model';

interface RGB {
  r: number;
  g: number;
  b: number;
}

@Injectable()
export class GoConfigService {
  config: BehaviorSubject<GoConfigInterface> = new BehaviorSubject<GoConfigInterface> ({
    brandColor: '#65B360',
    headerBrandingEnabled: false
  });

  public setBrandColor(color: string): void {
    // we have to copy the config here or it won't regester a change in components
    const config: GoConfigInterface = Object.assign({}, this.config.getValue());
    config.brandColor = color;
    this.config.next(config);
  }

  public toggleHeaderBrandingEnabled(): void {
    // we have to copy the config here or it won't regester a change in components
    const config: GoConfigInterface = Object.assign({}, this.config.getValue());
    config.headerBrandingEnabled = !config.headerBrandingEnabled;
    this.config.next(config);
  }

  public contrastIsAccessible(backgroundHex: string, foregroundHex: string): boolean {
    const backgroundRgb: RGB = this.hexToRgb(backgroundHex);
    const foregroundRgb: RGB = this.hexToRgb(foregroundHex);

    const contrast: number = this.contrast(backgroundRgb, foregroundRgb);

    return contrast > 4.5;
  }

  private hexToRgb(hex: string): RGB {
    const result: RegExpExecArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  private luminance(r: number, g: number, b: number): number {
    const a: number[] = [r, g, b].map((v: number) => {
      v /= 255;
      return v <= 0.03928
        ? v / 12.92
        : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  private contrast(rgb1: RGB, rgb2: RGB): number {
    const luminance1: number = this.luminance(rgb1['r'], rgb1['g'], rgb1['b']) + 0.05;
    const luminance2: number = this.luminance(rgb2['r'], rgb2['g'], rgb2['b']) + 0.05;

    return luminance1 / luminance2;
  }
}
