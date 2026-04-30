import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GoIconModule } from '../go-icon/go-icon.module';
import { GoTreeComponent } from './go-tree.component';

@NgModule({
  imports: [
    CommonModule,
    GoIconModule,
    GoTreeComponent
  ],
  exports: [
    GoTreeComponent
  ]
})
export class GoTreeModule { }
