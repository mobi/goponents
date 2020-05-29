import { Component, OnInit } from '@angular/core';
import {
  NavGroup,
  NavItem,
  GoConfigService,
  GoToasterService,
  GoOffCanvasService,
  GoSideNavService,
  GoModalService,
  GoSelectComponent
} from '../../../../../go-lib/src/public_api';
import { FormControl } from '@angular/forms';
import { OffCanvasTestComponent } from '../off-canvas-test/off-canvas-test.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  title: string = 'go-tester';

  menuItems: Array<NavGroup | NavItem> = [
    { routeIcon: 'dashboard', routeTitle: 'Tests', description: 'Test Routes', subRoutes: [
      { route: '/test-page-1', routeTitle: 'Test 1', description: 'Test Route 1' },
      { route: '/test-page-2', routeTitle: 'Test 2' },
      { routeTitle: 'Test 3', description: 'Forms', subRoutes: [
        { route: '/test-page-3', routeTitle: 'test 4' }
      ]}
    ]},
    { routeIcon: 'explore', routeTitle: 'Second Test', route: '/test-page-4', description: 'Test Route 4' },
    {
      routeIcon: 'search',
      routeTitle: 'External Link (In a New Tab)',
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
  toggleControl: FormControl = new FormControl(false);

  selectItems: any = [
    { value: 1, label: 'Reeses' },
    { value: 2, label: 'Mints' },
    { value: 3, label: 'Snickers' },
    { value: 4, label: 'KitKat' },
    { value: 5, label: 'Milky Way' },
    { value: 6, label: 'Sour Patch Kids' },
    { value: 7, label: 'Gobstoppers' },
    { value: 8, label: 'Spinach' }
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
      bindings: {
      },
      header: 'Test Header'
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
