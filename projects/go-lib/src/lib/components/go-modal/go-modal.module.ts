import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoModalComponent } from './go-modal.component';
import { GoModalDirective } from './go-modal.directive';

import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';

@NgModule({
  imports: [
    GoModalComponent,
    GoModalDirective,
    CommonModule,
    GoIconButtonModule
  ],
  exports: [GoModalComponent]
})

export class GoModalModule { }
