import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionDocsComponent } from '../components/accordion-docs/accordion-docs.component';
import { AccordionPanelDocsComponent } from '../components/accordion-docs/components/accordion-panel-docs/accordion-panel-docs.component';
import { ActionSheetDocsComponent } from '../components/action-sheet-docs/action-sheet-docs.component';
import { BadgeDocsComponent } from '../components/badge-docs/badge-docs.coponent';
import { ButtonDocsComponent } from '../components/button-docs/button-docs.component';
import { CardDocsComponent } from '../components/card-docs/card-docs.component';
import { CopyDocsComponent } from '../components/copy-docs/copy-docs.component';
import { DatepickerDocsComponent } from '../components/form-docs/components/datepicker-docs/datepicker-docs.component';
import { FileUploadDocsComponent } from '../components/form-docs/components/file-upload-docs/file-upload-docs.component';
import { FormDocsComponent } from '../components/form-docs/form-docs.component';
import { FormsOverviewComponent } from '../components/form-docs/components/forms-overview/forms-overview.component';
import { HeaderBarDocsComponent } from '../components/header-bar-docs/header-bar-docs.component';
import { IconButtonDocsComponent } from '../components/icon-button-docs/icon-button-docs.component';
import { IconDocsComponent } from '../components/icon-docs/icon-docs.component';
import { InputDocsComponent } from '../components/form-docs/components/input-docs/input-docs.component';
import { LayoutFooterComponent } from '../components/layout-docs/components/layout-footer/layout-footer.component';
import { ModalDocsComponent } from '../components/modal-docs/modal-docs.component';
import { ServerIntegrationComponent } from '../components/table-docs/components/server-integration/server-integration.component';
import { TableDocsComponent } from '../components/table-docs/table-docs.component';
import { TableOverviewComponent } from '../components/table-docs/components/table-overview/table-overview.component';
import { TablePaginationComponent } from '../components/table-docs/components/table-pagination/table-pagination.component';
import { TableSortingComponent } from '../components/table-docs/components/table-sorting/table-sorting.component';
import { TableTemplatesComponent } from '../components/table-docs/components/table-templates/table-templates.component';
import { ToastDocsComponent } from '../components/toast-docs/toast-docs.component';
import { UiKitComponent } from '../components/ui-kit/ui-kit.component';
import { OffCanvasDocsComponent } from '../components/off-canvas-docs/off-canvas-docs.component';
import { LoaderDocsComponent } from '../components/loader-docs/loader-docs.component';
import { LayoutDocsComponent } from '../components/layout-docs/layout-docs.component';
import { LayoutOverviewComponent } from '../components/layout-docs/components/layout-overview/layout-overview.component';
import { LayoutNavComponent } from '../components/layout-docs/components/layout-nav/layout-nav.component';
import { LayoutHeaderComponent } from '../components/layout-docs/components/layout-header/layout-header.component';
import { LayoutSearchComponent } from '../components/layout-docs/components/layout-search/layout-search.component';
import { LayoutExampleComponent } from '../components/layout-docs/components/layout-example/layout-example.component';
import { SelectDocsComponent } from '../components/form-docs/components/select-docs/select-docs.component';
import { TextAreaDocsComponent } from '../components/form-docs/components/text-area-docs/text-area-docs.component';
import { TableSelectionComponent } from '../components/table-docs/components/table-selection/table-selection.component';
import { TableActionsDocsComponent } from '../components/table-docs/components/table-actions-docs/table-actions-docs.component';
import { TableColumnDocsComponent } from '../components/table-docs/components/table-column-docs/table-column-docs.component';
import { ConfigurationDocsComponent } from '../components/configuration-docs/configuration-docs.component';
// tslint:disable-next-line: max-line-length
import { ActionSheetOverviewComponent } from '../components/action-sheet-docs/components/action-sheet-overview/action-sheet-overview.component';
// tslint:disable-next-line: max-line-length
import { ActionSheetPanelDocsComponent } from '../components/action-sheet-docs/components/action-sheet-panel-docs/action-sheet-panel-docs.component';
import { AccordionOverviewComponent } from '../components/accordion-docs/components/accordion-overview/accordion-overview.component';
import { SwitchToggleDocsComponent } from '../components/form-docs/components/switch-toggle-docs/switch-toggle-docs.component';
import { RadioButtonDocsComponent } from '../components/form-docs/components/radio-button-docs/radio-button-docs.component';
import { CheckboxDocsComponent } from '../components/form-docs/components/checkbox-docs/checkbox-docs.component';
import { TableDetailsComponent } from '../components/table-docs/components/table-details/table-details.component';
import { TabDocsComponent } from '../components/tab-docs/tab-docs.component';
import { PillDocsComponent } from '../components/pill-docs/pill-docs.component';

const routes: Routes = [
  { path: 'ui-kit', component: UiKitComponent },
  { path: 'ui-kit/accordion', component: AccordionDocsComponent, children: [
    { path: '', component: AccordionOverviewComponent },
    { path: 'panel', component: AccordionPanelDocsComponent }
  ]},
  { path: 'ui-kit/accordion-panel', component: AccordionPanelDocsComponent },
  { path: 'ui-kit/action-sheet', component: ActionSheetDocsComponent, children: [
    { path: '', component: ActionSheetOverviewComponent },
    { path: 'panel', component: ActionSheetPanelDocsComponent }
  ]},
  { path: 'ui-kit/badge', component: BadgeDocsComponent },
  { path: 'ui-kit/button', component: ButtonDocsComponent },
  { path: 'ui-kit/card', component: CardDocsComponent },
  { path: 'ui-kit/configuration', component: ConfigurationDocsComponent },
  { path: 'ui-kit/copy', component: CopyDocsComponent },
  { path: 'ui-kit/header-bar', component: HeaderBarDocsComponent },
  { path: 'ui-kit/forms', component: FormDocsComponent, children: [
    { path: '', component: FormsOverviewComponent },
    { path: 'checkbox', component: CheckboxDocsComponent },
    { path: 'datepicker', component: DatepickerDocsComponent },
    { path: 'file-upload', component: FileUploadDocsComponent },
    { path: 'input', component: InputDocsComponent },
    { path: 'radio', component: RadioButtonDocsComponent },
    { path: 'select', component: SelectDocsComponent },
    { path: 'switch-toggle', component: SwitchToggleDocsComponent },
    { path: 'textarea', component: TextAreaDocsComponent }
  ]},
  { path: 'ui-kit/icon-button', component: IconButtonDocsComponent },
  { path: 'ui-kit/layout', component: LayoutDocsComponent, children: [
    { path: '', component: LayoutOverviewComponent },
    { path: 'header', component: LayoutHeaderComponent },
    { path: 'search', component: LayoutSearchComponent },
    { path: 'side-nav', component: LayoutNavComponent },
    { path: 'footer', component: LayoutFooterComponent },
    { path: 'example', component: LayoutExampleComponent }
  ]},
  { path: 'ui-kit/loader', component: LoaderDocsComponent },
  { path: 'ui-kit/icon', component: IconDocsComponent },
  { path: 'ui-kit/modal', component: ModalDocsComponent },
  { path: 'ui-kit/off-canvas', component: OffCanvasDocsComponent },
  { path: 'ui-kit/pills', component: PillDocsComponent },
  { path: 'ui-kit/tabs', component: TabDocsComponent },
  { path: 'ui-kit/table', component: TableDocsComponent, children: [
    { path: '', component: TableOverviewComponent },
    { path: 'actions', component: TableActionsDocsComponent },
    { path: 'columns', component: TableColumnDocsComponent },
    { path: 'pagination', component: TablePaginationComponent },
    { path: 'selection', component: TableSelectionComponent },
    { path: 'server-integration', component: ServerIntegrationComponent },
    { path: 'sorting', component: TableSortingComponent },
    { path: 'templating', component: TableTemplatesComponent },
    { path: 'details', component: TableDetailsComponent }
  ]},
  { path: 'ui-kit/toast', component: ToastDocsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UiKitRoutesModule { }
