import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoHeaderBarComponent } from './go-header-bar.component';
import { GoHeaderBarDirective } from './go-header-bar.directive';

@NgModule({
  declarations: [
    GoHeaderBarComponent,
    GoHeaderBarDirective
  ],
  imports: [
    // Angular
    CommonModule
  ],
  exports: [
    GoHeaderBarDirective,
    GoHeaderBarComponent
  ]
})

export class GoHeaderBarModule { }
