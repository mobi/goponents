import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoRequiredTextComponent } from './go-required-text.component';

@NgModule({
  imports: [
    GoRequiredTextComponent,
    CommonModule,
    FormsModule
  ],
  exports: [GoRequiredTextComponent]
})

export class GoRequiredTextModule { }
