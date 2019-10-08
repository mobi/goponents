import { Component, OnInit } from '@angular/core';

import {
  GoConfigService,
  GoModalService,
  GoOffCanvasService,
  GoSelectComponent,
  GoSideNavService,
  GoToasterService,
  NavGroup,
  NavItem,
} from '../../../go-lib/src/public_api';
import { OffCanvasTestComponent } from './components/off-canvas-test/off-canvas-test.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logo: string = 'https://mobi.thefutureis.mobi/images/assets/theme_logo/000/000/000/178/header.png?1556627290';
  title: string = 'go-tester';

  menuItems: Array<NavGroup | NavItem> = [
    { routeIcon: 'dashboard', routeTitle: 'Tests', description: 'Test Routes', subRoutes: [
      { route: 'test-page-1', routeTitle: 'Test 1', description: 'Test Route 1' },
      { route: 'test-page-2', routeTitle: 'Test 2' },
      { route: 'test-page-3', routeTitle: 'Test 3', description: 'Forms' }
    ]},
    { routeIcon: 'explore', routeTitle: 'Second Test', route: 'test-page-4', description: 'Test Route 4' },
    {
      routeIcon: 'search',
      routeTitle: 'External Link (New Tab)',
      description: 'Test external link opening in new tab',
      route: 'https://www.google.com/',
      isExternalLink: true
    },
    {
      routeIcon: 'search',
      routeTitle: 'External Link (Same Tab)',
      description: 'Test external link opening in same tab',
      route: 'https://www.google.com/',
      isExternalLink: true,
      externalLinkTarget: '_self'
    }
  ];

  selectControl: FormControl = new FormControl('');

  selectItems: any = [
    { value: 1, label: 'Reeses' },
    { value: 2, label: 'Mints' },
    { value: 1, label: 'Snickers' },
    { value: 2, label: 'KitKat' },
    { value: 1, label: 'Milky Way' },
    { value: 2, label: 'Sour Patch Kids' },
    { value: 1, label: 'Gobstoppers' },
    { value: 2, label: 'Spinach' }
  ];

  constructor(
    private goConfigService: GoConfigService,
    private goToasterService: GoToasterService,
    private goOffCanvasService: GoOffCanvasService,
    private goSideNavService: GoSideNavService,
    private goModalService: GoModalService
  ) { }

  ngOnInit(): void {
    this.goConfigService.setBrandColor('#8A4EDE');
  }

  openOffCanvas(): void {
    this.goOffCanvasService.openOffCanvas({
      component: OffCanvasTestComponent,
      bindings: {}
    });
  }

  toggleSideMenu(): void {
    this.goSideNavService.toggleNav();
  }

  openModal(): void {
    this.goModalService.openModal(
      GoSelectComponent,
      {
        appendTo: 'body',
        control: this.selectControl,
        items: this.selectItems,
        label: 'Testing the appendTo input'
      }
    );
  }

  openToast(): void {
    this.goToasterService.toastInfo({ message: 'From the action sheet'});
  }
}
