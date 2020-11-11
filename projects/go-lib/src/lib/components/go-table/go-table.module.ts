import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoCheckboxModule } from '../go-checkbox/go-checkbox.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoSelectModule } from '../go-select/go-select.module';

import { GoTableChildColumnComponent } from './go-table-child-column.component';
import { GoTableColumnComponent } from './go-table-column.component';
import { GoTableComponent } from './go-table.component';

@NgModule({
  declarations: [
    GoTableChildColumnComponent,
    GoTableColumnComponent,
    GoTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GoCheckboxModule,
    GoIconModule,
    GoIconButtonModule,
    GoLoaderModule,
    GoSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    GoTableChildColumnComponent,
    GoTableColumnComponent,
    GoTableComponent
  ]
})

export class GoTableModule { }
