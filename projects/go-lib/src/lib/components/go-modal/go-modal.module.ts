import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoModalComponent } from './go-modal.component';
import { GoModalDirective } from './go-modal.directive';

import { GoIconModule } from '../go-icon/go-icon.module';

@NgModule({
  declarations: [
    GoModalComponent,
    GoModalDirective
  ],
  imports: [
    CommonModule,
    GoIconModule
  ],
  exports: [GoModalComponent]
})

export class GoModalModule { }
