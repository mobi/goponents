import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoCardComponent } from './go-card.component';

@NgModule({
  declarations: [GoCardComponent],
  imports: [
    CommonModule
  ],
  exports: [GoCardComponent]
})

export class GoCardModule { }
