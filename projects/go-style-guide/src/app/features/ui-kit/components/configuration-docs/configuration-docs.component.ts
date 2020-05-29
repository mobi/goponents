import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
export class ConfigurationDocsComponent implements OnInit {
  pageTitle: string = 'Configuration Service';
  inputControl: FormControl = new FormControl(false);
  configModeControl: FormControl = new FormControl(false);

  updateColorExample: string = `
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
    [control]="toggleControl"
    label="Header Branding">
  </go-switch-toggle>
  `;

  toggleHeaderEnabledExample: string = `
  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(() => {
      this.goConfigService.toggleHeaderBrandingEnabled();
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

  constructor(private goConfigService: GoConfigService) { }

  ngOnInit(): void {
    this.inputControl = new FormControl(this.goConfigService.getConfig().brandColor);
    this.configModeControl.valueChanges.subscribe((value: boolean) => {
      if (value) {
        this.goConfigService.setConfig(this.clientConfig);
      } else {
        this.goConfigService.setConfig(this.defaultConfig);
      }
    });

    // const theme: any = this.runtimeService.theme;

    // if (theme.business_id === 1) {
    //   this.goConfigService.setConfig({
    //     brandColor: theme.brandColor,
    //     brandingMode: BrandingMode.company,
    //     logoConfig: {
    //       logo: theme.logo,
    //       logoCollapsed: theme.logo_secondary
    //     }
    //   });
    // } else {
    //   this.goConfigService.setConfig({
    //     brandColor: theme.brandColor,
    //     brandingMode: BrandingMode.client,
    //     logoConfig: {
    //       logo: theme.logo
    //     }
    //   });
    // }
  }

  updateColor(): void {
    this.goConfigService.setBrandColor(this.inputControl.value);
  }
}
