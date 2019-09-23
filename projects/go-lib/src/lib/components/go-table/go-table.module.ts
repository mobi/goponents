import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';

import { GoTableColumnComponent } from './go-table-column.component';
import { GoTableComponent } from './go-table.component';

@NgModule({
  declarations: [
    GoTableColumnComponent,
    GoTableComponent
  ],
  imports: [
    CommonModule,
    GoIconModule,
    GoLoaderModule
  ],
  exports: [
    GoTableColumnComponent,
    GoTableComponent
  ]
})

export class GoTableModule { }
