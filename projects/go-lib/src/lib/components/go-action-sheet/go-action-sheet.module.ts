import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconModule } from '../go-icon/go-icon.module';
import { GoActionSheetComponent } from './go-action-sheet.component';
import { GoPanelComponent } from '../go-action-sheet/go-panel/go-panel.component';
@NgModule({
  declarations: [
    GoActionSheetComponent,
    GoPanelComponent
  ],
  imports: [
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoActionSheetComponent,
    GoPanelComponent
  ]
})

export class GoActionSheetModule { }
