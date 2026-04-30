import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoBadgeComponent } from './go-badge.component';

@NgModule({
  imports: [
    GoBadgeComponent,
    CommonModule
  ],
  exports: [GoBadgeComponent]
})

export class GoBadgeModule { }
