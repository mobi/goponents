import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoHintModule } from '../go-hint/go-hint.module';
import { GoFileUploadComponent } from './go-file-upload.component';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';

@NgModule({
  declarations: [GoFileUploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    GoButtonModule,
    GoHintModule,
    GoIconButtonModule,
    ReactiveFormsModule
  ],
  exports: [GoFileUploadComponent]
})

export class GoFileUploadModule { }
