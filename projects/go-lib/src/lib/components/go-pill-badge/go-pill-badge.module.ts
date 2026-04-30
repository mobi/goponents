import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoPillBadgeComponent } from './go-pill-badge.component';

@NgModule({
  imports: [
    GoPillBadgeComponent,CommonModule],
  exports: [GoPillBadgeComponent],
})
export class GoBadgePillModule {}
