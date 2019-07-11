import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoBadgeComponent } from './go-badge.component';

@NgModule({
  declarations: [GoBadgeComponent],
  imports: [
    CommonModule
  ],
  exports: [GoBadgeComponent]
})

export class GoBadgeModule { }
