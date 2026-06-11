import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoInputGroupComponent } from './go-input-group.component';
import { GoInputGroupPrependDirective } from './go-input-group-prepend.directive';
import { GoInputGroupAppendDirective } from './go-input-group-append.directive';

@NgModule({
  imports: [
    CommonModule,
    GoInputGroupComponent,
    GoInputGroupPrependDirective,
    GoInputGroupAppendDirective
  ],
  exports: [
    GoInputGroupComponent,
    GoInputGroupPrependDirective,
    GoInputGroupAppendDirective
  ]
})
export class GoInputGroupModule {}
