import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../../shared/shared.module';

// GoPonents
import {
  GoAccordionModule,
  GoActionSheetModule,
  GoBadgeModule,
  GoButtonModule,
  GoCardModule,
  GoCheckboxModule,
  GoConfigService,
  GoCopyModule,
  GoDatepickerModule,
  GoFileUploadModule,
  GoIconButtonModule,
  GoIconModule,
  GoInputModule,
  GoLoaderModule,
  GoModalModule,
  GoModalService,
  GoOffCanvasModule,
  GoOffCanvasService,
  GoPillModule,
  GoRadioModule,
  GoSelectComponent,
  GoSelectModule, GoSharedModule,
  GoSwitchToggleModule,
  GoTableModule,
  GoTabModule,
  GoTextAreaModule,
  GoToasterService,
  GoToastModule,
  GoTreeModule
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
import { FileUploadDocsComponent } from './components/form-docs/components/file-upload-docs/file-upload-docs.component';
import { FormControlDocsComponent } from './components/form-docs/components/form-control-docs/form-control-docs.component';
import { FormDocsComponent } from './components/form-docs/form-docs.component';
import { FormsOverviewComponent } from './components/form-docs/components/forms-overview/forms-overview.component';
import { IconButtonDocsComponent } from './components/icon-button-docs/icon-button-docs.component';
import { IconDocsComponent } from './components/icon-docs/icon-docs.component';
import { InputDocsComponent } from './components/form-docs/components/input-docs/input-docs.component';
import { LayoutFooterComponent } from './components/layout-docs/components/layout-footer/layout-footer.component';
import { ModalDocsComponent } from './components/modal-docs/modal-docs.component';
import { ModalTestComponent } from './components/modal-test/modal-test.component';
import { SelectDocsComponent } from './components/form-docs/components/select-docs/select-docs.component';
import { ServerIntegrationComponent } from './components/table-docs/components/server-integration/server-integration.component';
import { TableDetailsComponent } from './components/table-docs/components/table-details/table-details.component';
import { TableDetailsTestComponent } from './components/table-docs/components/table-details/table-details-test.component';
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
import { LayoutAppDrawerComponent } from './components/layout-docs/components/layout-app-drawer/layout-app-drawer.component';
import { LayoutDocsComponent } from './components/layout-docs/layout-docs.component';
import { LayoutOverviewComponent } from './components/layout-docs/components/layout-overview/layout-overview.component';
import { LayoutNavComponent } from './components/layout-docs/components/layout-nav/layout-nav.component';
import { LayoutHeaderComponent } from './components/layout-docs/components/layout-header/layout-header.component';
import { LayoutSearchComponent } from './components/layout-docs/components/layout-search/layout-search.component';
import { LayoutExampleComponent } from './components/layout-docs/components/layout-example/layout-example.component';
import { TextAreaDocsComponent } from './components/form-docs/components/text-area-docs/text-area-docs.component';
import { TableSelectionComponent } from './components/table-docs/components/table-selection/table-selection.component';
import { TableActionsDocsComponent } from './components/table-docs/components/table-actions-docs/table-actions-docs.component';
import { TableColumnDocsComponent } from './components/table-docs/components/table-column-docs/table-column-docs.component';
import { ActionSheetDocsComponent } from './components/action-sheet-docs/action-sheet-docs.component';
// tslint:disable-next-line: max-line-length
import { ActionSheetOverviewComponent } from './components/action-sheet-docs/components/action-sheet-overview/action-sheet-overview.component';
// tslint:disable-next-line: max-line-length
import { ActionSheetPanelDocsComponent } from './components/action-sheet-docs/components/action-sheet-panel-docs/action-sheet-panel-docs.component';
import { AccordionOverviewComponent } from './components/accordion-docs/components/accordion-overview/accordion-overview.component';
import { SwitchToggleDocsComponent } from './components/form-docs/components/switch-toggle-docs/switch-toggle-docs.component';
import { RadioButtonDocsComponent } from './components/form-docs/components/radio-button-docs/radio-button-docs.component';
import { CheckboxDocsComponent } from './components/form-docs/components/checkbox-docs/checkbox-docs.component';
import { LoadingTestComponent } from './components/accordion-docs/components/accordion-panel-docs/loading-test.component';
import { HeaderBarDocsComponent } from './components/header-bar-docs/header-bar-docs.component';
import { TabDocsComponent } from './components/tab-docs/tab-docs.component';
import { PillDocsComponent } from './components/pill-docs/pill-docs.component';
import { TableSearchingComponent } from './components/table-docs/components/table-searching/table-searching.component';
import { TableFiltersComponent } from './components/table-docs/components/table-filters/table-filters.component';
import { TreeDocsComponent } from './components/tree-docs/tree-docs.component';

@NgModule({
  imports: [
    CommonModule,
    GoAccordionModule,
    GoActionSheetModule,
    GoBadgeModule,
    GoButtonModule,
    GoCardModule,
    GoCheckboxModule,
    GoCopyModule,
    GoDatepickerModule,
    GoFileUploadModule,
    GoIconButtonModule,
    GoIconModule,
    GoInputModule,
    GoSelectModule,
    GoTabModule,
    GoTextAreaModule,
    GoLoaderModule,
    GoModalModule,
    GoOffCanvasModule,
    GoPillModule,
    GoSwitchToggleModule,
    GoRadioModule,
    GoTableModule,
    GoToastModule,
    HighlightModule,
    SharedModule,
    UiKitRoutesModule,
    GoSharedModule,
    FormsModule,
    GoTreeModule
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
    FileUploadDocsComponent,
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
    TableSearchingComponent,
    TableSortingComponent,
    TableTemplatesComponent,
    TextAreaDocsComponent,
    ToastDocsComponent,
    UiKitComponent,
    LoaderDocsComponent,
    LayoutDocsComponent,
    LayoutAppDrawerComponent,
    LayoutFooterComponent,
    LayoutOverviewComponent,
    LayoutNavComponent,
    LayoutHeaderComponent,
    LayoutSearchComponent,
    LayoutExampleComponent,
    TabDocsComponent,
    TableDetailsComponent,
    TableDetailsTestComponent,
    TableSelectionComponent,
    TableActionsDocsComponent,
    TableColumnDocsComponent,
    ActionSheetDocsComponent,
    ActionSheetOverviewComponent,
    ActionSheetPanelDocsComponent,
    AccordionOverviewComponent,
    SwitchToggleDocsComponent,
    RadioButtonDocsComponent,
    CheckboxDocsComponent,
    LoadingTestComponent,
    HeaderBarDocsComponent,
    TreeDocsComponent,
    PillDocsComponent,
    TableFiltersComponent
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
    GoToasterService,
    TitleCasePipe
  ]
})

export class UiKitModule { }
