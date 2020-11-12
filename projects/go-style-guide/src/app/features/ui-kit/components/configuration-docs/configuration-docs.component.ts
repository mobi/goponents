import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  BrandingMode,
  GoConfigInterface,
  GoConfigService,
  ThemeColors
} from '../../../../../../../go-lib/src/public_api';

@Component({
  selector: 'app-configuration-docs',
  templateUrl: './configuration-docs.component.html'
})
export class ConfigurationDocsComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Configuration Service';
  inputControl: FormControl = new FormControl(false);
  configModeControl: FormControl = new FormControl(false);
  configHints: string[] = [`Showing ${BrandingMode.company} mode`];

  updateColorExample: string = `
  constructor(private goConfigService: GoConfigService) { }

  updateColor(): void {
    this.goConfigService.setBrandColor(this.color);
  }
  `;

  inputExample: string = `
  <go-input
    [control]="formControl"
    label="Brand Color">
  </go-input>
  `;

  buttonExample: string = `
  <go-button (handleClick)="updateColor()">
    Update Branding Color
  </go-button>
  `;

  toggleExample: string = `
  <go-switch-toggle
    [control]="configModeControl"
    label="Header Branding">
  </go-switch-toggle>
  `;

  toggleHeaderEnabledExample: string = `
  configModeControl: FormControl = new FormControl(false);

  defaultConfig: GoConfigInterface = {
    brandColor: ThemeColors.brand,
    brandingMode: BrandingMode.company,
    logoConfig: {
      logo: 'assets/images/goDesign.svg',
      logoCollapsed: 'assets/images/goDesign_green.svg'
    }
  };

  clientConfig: GoConfigInterface = {
    brandColor: ThemeColors.brand,
    brandingMode: BrandingMode.client,
    logoConfig: {
      logo: 'assets/images/goDesign_green.svg'
    }
  };

  ngOnInit(): void {
    this.configModeControl.valueChanges.subscribe((value: boolean) => {
      if (value) {
        this.goConfigService.setConfig(this.clientConfig);
      } else {
        this.goConfigService.setConfig(this.defaultConfig);
      }
    });
  }
  `;

  configInterfaceExample: string = `
  export interface GoConfigInterface {

    /**
     * The specific color used throughout Goponents to
     * add a branded element to a UI component.
     */
    brandColor: string;

    /**
     * See 'BrandingMode' for explanation
     */
    brandingMode: BrandingMode;

    /**
     * See 'LogoConfig' for explanation
     */
    logoConfig: Partial<LogoConfig>;
  }
  `;

  configServiceDefaults: string = `
  brandColor: ThemeColors.brand, // Base brand color, #65B360
  brandingMode: BrandingMode.company
  `;

  configServiceSimple: string = `
  // Do this where you use the go-layout component, typically app.component.ts

  constructor(private goConfigService: GoConfigService) {
    this.goConfigService.setLogo({
      logo: 'assets/images/goDesign.svg', // replace with URL path to logo
      logoCollapsed: 'assets/images/goDesign_green.svg' // replace with URL path to logo
    });
  }
  `;

  defaultConfig: GoConfigInterface = {
    brandColor: ThemeColors.brand,
    brandingMode: BrandingMode.company,
    logoConfig: {
      logo: 'assets/images/goDesign.svg',
      logoCollapsed: 'assets/images/goDesign_green.svg'
    }
  };

  clientConfig: GoConfigInterface = {
    brandColor: ThemeColors.brand,
    brandingMode: BrandingMode.client,
    logoConfig: {
      logo: 'assets/images/goDesign_green.svg'
    }
  };

  private destroy$: Subject<void> = new Subject();

  constructor(private goConfigService: GoConfigService) { }

  ngOnInit(): void {
    this.inputControl = new FormControl(this.goConfigService.getConfig().brandColor);
    this.configModeControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => {
        if (value) {
          this.goConfigService.setConfig(this.clientConfig);
          this.configHints = [`Showing ${BrandingMode.client} mode`];
        } else {
          this.goConfigService.setConfig(this.defaultConfig);
          this.configHints = [`Showing ${BrandingMode.company} mode`];
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateColor(): void {
    this.goConfigService.setBrandColor(this.inputControl.value);
  }
}
