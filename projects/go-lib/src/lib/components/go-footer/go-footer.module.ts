import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoFooterComponent } from './go-footer.component';

@NgModule({
  imports: [
    GoFooterComponent,
    CommonModule
  ],
  exports: [
    GoFooterComponent
  ]
})

export class GoFooterModule { }
