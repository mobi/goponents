import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoTableColumnComponent } from './go-table-column.component';
import { GoTableComponent } from './go-table.component';

@NgModule({
  declarations: [
    GoTableColumnComponent,
    GoTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoTableColumnComponent,
    GoTableComponent
  ]
})

export class GoTableModule { }
