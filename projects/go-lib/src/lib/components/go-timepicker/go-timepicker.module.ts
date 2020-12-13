import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoTimepickerComponent } from './go-timepicker.component';
import { GoTimeComponent } from './go-time.component';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoInputModule } from '../go-input/go-input.module';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoHintModule } from '../go-hint/go-hint.module';

@NgModule({
  declarations: [
    GoTimepickerComponent,
    GoTimeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GoIconButtonModule,
    GoInputModule,
    GoButtonModule,
    GoIconModule,
    GoRequiredTextModule,
    GoHintModule
  ],
  exports: [GoTimepickerComponent],
})
export class GoTimepickerModule {}
