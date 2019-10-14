import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../../shared/shared.module';

// GoPonents
import {
  GoAccordionModule,
  GoActionSheetModule,
  GoBadgeModule,
  GoButtonModule,
  GoCardModule,
  GoConfigService,
  GoCopyModule,
  GoDatepickerModule,
  GoIconButtonModule,
  GoIconModule,
  GoInputModule,
  GoLoaderModule,
  GoModalModule,
  GoModalService,
  GoOffCanvasModule,
  GoOffCanvasService,
  GoSelectModule,
  GoTableModule,
  GoTextAreaModule,
  GoToasterService,
  GoToastModule,
  GoSelectComponent
} from '../../../../../go-lib/src/public_api';

// Module Routes
import { UiKitRoutesModule } from './routes/ui-kit-routing.module';

// Module Components
import { AccordionDocsComponent } from './components/accordion-docs/accordion-docs.component';
import { AccordionPanelDocsComponent } from './components/accordion-docs/components/accordion-panel-docs/accordion-panel-docs.component';
import { BadgeDocsComponent } from './components/badge-docs/badge-docs.coponent';
import { ButtonDocsComponent } from './components/button-docs/button-docs.component';
import { CardDocsComponent } from './components/card-docs/card-docs.component';
import { ConfigurationDocsComponent } from './components/configuration-docs/configuration-docs.component';
import { CopyDocsComponent } from './components/copy-docs/copy-docs.component';
import { DatepickerDocsComponent } from './components/form-docs/components/datepicker-docs/datepicker-docs.component';
import { FormControlDocsComponent } from './components/form-docs/components/form-control-docs/form-control-docs.component';
import { FormDocsComponent } from './components/form-docs/form-docs.component';
import { FormsOverviewComponent } from './components/form-docs/components/forms-overview/forms-overview.component';
import { IconButtonDocsComponent } from './components/icon-button-docs/icon-button-docs.component';
import { IconDocsComponent } from './components/icon-docs/icon-docs.component';
import { InputDocsComponent } from './components/form-docs/components/input-docs/input-docs.component';
import { ModalDocsComponent } from './components/modal-docs/modal-docs.component';
import { ModalTestComponent } from './components/modal-test/modal-test.component';
import { SelectDocsComponent } from './components/form-docs/components/select-docs/select-docs.component';
import { ServerIntegrationComponent } from './components/table-docs/components/server-integration/server-integration.component';
import { TableDocsComponent } from './components/table-docs/table-docs.component';
import { TableOverviewComponent } from './components/table-docs/components/table-overview/table-overview.component';
import { TablePaginationComponent } from './components/table-docs/components/table-pagination/table-pagination.component';
import { TableSortingComponent } from './components/table-docs/components/table-sorting/table-sorting.component';
import { TableTemplatesComponent } from './components/table-docs/components/table-templates/table-templates.component';
import { ToastDocsComponent } from './components/toast-docs/toast-docs.component';
import { UiKitComponent } from './components/ui-kit/ui-kit.component';
import { BasicTestComponent } from './components/basic-test/basic-test.component';
import { OffCanvasDocsComponent } from './components/off-canvas-docs/off-canvas-docs.component';
import { LoaderDocsComponent } from './components/loader-docs/loader-docs.component';
import { LayoutDocsComponent } from './components/layout-docs/layout-docs.component';
import { LayoutOverviewComponent } from './components/layout-docs/components/layout-overview/layout-overview.component';
import { LayoutNavComponent } from './components/layout-docs/components/layout-nav/layout-nav.component';
import { LayoutHeaderComponent } from './components/layout-docs/components/layout-header/layout-header.component';
import { LayoutSearchComponent } from './components/layout-docs/components/layout-search/layout-search.component';
import { LayoutExampleComponent } from './components/layout-docs/components/layout-example/layout-example.component';
import { TextAreaDocsComponent } from './components/form-docs/components/text-area-docs/text-area-docs.component';
import { TableSelectionComponent } from './components/table-docs/components/table-selection/table-selection.component';
import { TableActionsDocsComponent } from './components/table-docs/components/table-actions-docs/table-actions-docs.component';
import { ActionSheetDocsComponent } from './components/action-sheet-docs/action-sheet-docs.component';
// tslint:disable-next-line: max-line-length
import { ActionSheetOverviewComponent } from './components/action-sheet-docs/components/action-sheet-overview/action-sheet-overview.component';
// tslint:disable-next-line: max-line-length
import { ActionSheetPanelDocsComponent } from './components/action-sheet-docs/components/action-sheet-panel-docs/action-sheet-panel-docs.component';
import { AccordionOverviewComponent } from './components/accordion-docs/components/accordion-overview/accordion-overview.component';

@NgModule({
  imports: [
    CommonModule,
    GoAccordionModule,
    GoActionSheetModule,
    GoBadgeModule,
    GoButtonModule,
    GoCardModule,
    GoCopyModule,
    GoDatepickerModule,
    GoIconButtonModule,
    GoIconModule,
    GoInputModule,
    GoSelectModule,
    GoTextAreaModule,
    GoLoaderModule,
    GoModalModule,
    GoOffCanvasModule,
    GoTableModule,
    GoToastModule,
    HighlightModule,
    SharedModule,
    UiKitRoutesModule
  ],
  declarations: [
    AccordionDocsComponent,
    AccordionPanelDocsComponent,
    BasicTestComponent,
    BadgeDocsComponent,
    ButtonDocsComponent,
    CardDocsComponent,
    ConfigurationDocsComponent,
    CopyDocsComponent,
    FormControlDocsComponent,
    DatepickerDocsComponent,
    FormDocsComponent,
    FormsOverviewComponent,
    IconButtonDocsComponent,
    IconDocsComponent,
    InputDocsComponent,
    ModalDocsComponent,
    ModalTestComponent,
    OffCanvasDocsComponent,
    SelectDocsComponent,
    ServerIntegrationComponent,
    TableDocsComponent,
    TableOverviewComponent,
    TablePaginationComponent,
    TableSortingComponent,
    TableTemplatesComponent,
    TextAreaDocsComponent,
    ToastDocsComponent,
    UiKitComponent,
    LoaderDocsComponent,
    LayoutDocsComponent,
    LayoutOverviewComponent,
    LayoutNavComponent,
    LayoutHeaderComponent,
    LayoutSearchComponent,
    LayoutExampleComponent,
    TableSelectionComponent,
    TableActionsDocsComponent,
    ActionSheetDocsComponent,
    ActionSheetOverviewComponent,
    ActionSheetPanelDocsComponent,
    AccordionOverviewComponent
  ],
  entryComponents: [
    BasicTestComponent,
    GoSelectComponent,
    ModalTestComponent
  ],
  providers: [
    GoConfigService,
    GoModalService,
    GoOffCanvasService,
    GoToasterService
  ]
})

export class UiKitModule { }
