import { Component } from '@angular/core';

import { SubNavService } from 'projects/go-style-guide/src/app/shared/components/sub-nav/sub-nav.service';

@Component({
  selector: 'app-layout-app-drawer',
  templateUrl: './layout-app-drawer.component.html'
})
export class LayoutAppDrawerComponent {
  interfaceHtml: string = `
  interface NavAppDrawer {
    currentAppIcon: string;
    currentAppDisplayName: string;
    appDrawerConfig?: NavAppDrawerItem[];
  }

  interface NavAppDrawerItem {
    displayName: string;
    icon: string;
    url: string;
  }

  export { NavAppDrawer, NavAppDrawerItem };
  `;

  basicExample_ts: string = `
  import { NavAppDrawer } from '@tangoe/goponents';

  navAppDrawer: NavAppDrawer = {
    currentAppIcon: 'power_settings_new',
    currentAppDisplayName: 'go-design',
    appDrawerConfig: [
      {
        displayName: 'GitHub',
        icon: 'code',
        url: 'https://github.com/'
      },
      {
        displayName: 'Go Design',
        icon: 'power_settings_new',
        url: 'https://tangoe.design/getting-started'
      },
      {
        displayName: 'Google',
        icon: 'search',
        url: 'https://www.google.com/'
      },
      {
        displayName: 'Stack Overflow',
        icon: 'contact_support',
        url: 'https://stackoverflow.com/'
      }
    ]
  };
  `;

  basicExample_html: string = `
  <!-- NOTE: This does not contain all required bindings. This is a simple example for app-drawer only. -->
  <go-side-nav [navAppDrawer]="navAppDrawer"></go-side-nav>
  `;

  constructor(private subNavService: SubNavService) {
    this.subNavService.pageTitle = 'App Drawer';
    this.subNavService.linkToSource = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-side-nav';
  }
}
