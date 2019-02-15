import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';

import { GoIconModule } from '../go-icon/go-icon.module';
import { GoTableComponent } from './go-table.component';

@NgModule({
  declarations: [GoTableComponent],
  imports: [
    CdkTableModule,
    CommonModule,
    GoIconModule
  ],
  exports: [GoTableComponent]
})

export class GoTableModule { }
