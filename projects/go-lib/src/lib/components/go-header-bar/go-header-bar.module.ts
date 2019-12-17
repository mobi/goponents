import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoIconModule } from '../go-icon/go-icon.module';

import { GoHeaderBarComponent } from './go-header-bar.component';
import { GoHeaderBarDirective } from './go-header-bar.directive';

@NgModule({
  declarations: [
    GoHeaderBarComponent,
    GoHeaderBarDirective
  ],
  imports: [
    // Angular
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoHeaderBarDirective,
    GoHeaderBarComponent
  ]
})

export class GoHeaderBarModule { }
