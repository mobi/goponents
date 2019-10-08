import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoHintModule } from '../go-hint/go-hint.module';
import { GoFileUploadComponent } from './go-file-upload.component';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { DragonDropDirective } from './go-dragon-drop.directive';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';

@NgModule({
  declarations: [
    DragonDropDirective,
    GoFileUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GoButtonModule,
    GoHintModule,
    GoIconModule,
    GoIconButtonModule,
    GoLoaderModule,
    ReactiveFormsModule
  ],
  exports: [GoFileUploadComponent]
})

export class GoFileUploadModule { }
