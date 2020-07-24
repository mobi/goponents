import { Component } from '@angular/core';
import { GoConfigService, ThemeColors, BrandingMode } from '../../../go-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private goConfigService: GoConfigService) {
    this.goConfigService.setConfig({
      brandColor: ThemeColors.brand,
      brandingMode: BrandingMode.client,
      logoConfig: {
        altText: 'Tangoe Logo',
        logo: 'https://mobi.thefutureis.mobi/images/assets/theme_logo/000/000/000/178/header.png?1556627290'
      }
    });
  }

}
