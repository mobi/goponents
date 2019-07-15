import { Component, OnInit, ViewChild } from '@angular/core';

import { AppService } from './app.service';
import {
  GoTableConfig,
  GoOffCanvasService,
  GoTableDataSource,
  GoButtonComponent,
  GoIconComponent,
  GoLoaderComponent,
  GoSideNavService,
  GoToasterService,
  NavGroup,
  NavItem
} from '../../../go-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('heyButton') heyButton: GoButtonComponent;
  @ViewChild('loader') loader: GoLoaderComponent;

  title = 'go-tester';

  tableConfig: GoTableConfig;
  tableLoading: boolean = true;

  menuItems: Array<NavGroup | NavItem> = [
    { route: 'getting-started', routeIcon: 'power_settings_new', routeTitle: 'Getting Started' },
    {routeIcon: 'gavel', routeTitle: 'Standards', subRoutes: [
      { route: 'standards/colors', routeTitle: 'Colors' },
      { route: 'standards/forms', routeTitle: 'Forms' },
      { route: 'standards/grid', routeTitle: 'Grid System' },
      { routeTitle: 'Nested Typography', subRoutes: [
        { route: 'whatever', routeTitle: 'This is nested'}
      ]}
    ]},
    {routeIcon: 'widgets', routeTitle: 'Components', subRoutes: [
      { route: 'ui-kit/accordion', routeTitle: 'Accordion' },
      { route: 'ui-kit/accordion-panel', routeTitle: 'Accordion Panel' },
      { route: 'ui-kit/button', routeTitle: 'Button' },
      { route: 'ui-kit/card', routeTitle: 'Card' },
      { route: 'ui-kit/icon', routeTitle: 'Icon' },
      { route: 'ui-kit/modal', routeTitle: 'Modal' },
      { route: 'ui-kit/off-canvas', routeTitle: 'Off Canvas' },
      { route: 'ui-kit/table', routeTitle: 'Table'},
      { route: 'ui-kit/toast', routeTitle: 'Toast' }
    ]}
  ];

  constructor(
    private appService: AppService,
    private goToasterService: GoToasterService,
    private goOffCanvasService: GoOffCanvasService,
    private goSideNavService: GoSideNavService
  ) { }

  ngOnInit() {
    this.appService.getMockData(new GoTableConfig()).subscribe(data => {
      this.tableConfig = new GoTableConfig({
        dataMode: GoTableDataSource.server,
        tableData: data.results,
        totalCount: data.totalCount
      });
      this.tableLoading = false;
    });

    // setTimeout(() => {
    //   this.goToasterService.toastInfo({ message: 'Check this out'});
    //   this.goToasterService.toastSuccess({message: 'Check this out' });
    //   this.goToasterService.toastError({ message: 'Check this out' });
    // }, 1500);
  }

  stopLoaderAnimation() {
    this.loader.loaderDone = this.loader.loaderDone ? false: true;
  }

  clickHey(): void {
    setTimeout(() => {
      this.heyButton.reset();
    }, 4000);
  }

  handleTableChange(currentTableConfig: GoTableConfig) : void {
    if (this.tableConfig.dataMode === GoTableDataSource.server) {
      this.appService.getMockData(currentTableConfig).subscribe(data => {
        setTimeout(() => {
          currentTableConfig.tableData = data.results;
          currentTableConfig.totalCount = data.totalCount;

          this.tableConfig = currentTableConfig;
          this.tableLoading = false;
        }, 2000);
      });
    }
  }

  openThing() : void {
    this.goOffCanvasService.openOffCanvas({
      component: GoIconComponent,
      bindings: {
        icon: 'alarm'
      }
    });
  }

  toggleSideMenu(): void {
    this.goSideNavService.toggleNav();
  }
}
