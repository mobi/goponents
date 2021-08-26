import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorModule } from '@tinymce/tinymce-angular';

import { GoEditorComponent } from './go-editor.component';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';

@NgModule({
  declarations: [
    GoEditorComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    FormsModule,
    GoFormErrorsModule,
    GoHintModule,
    GoRequiredTextModule,
    ReactiveFormsModule
  ],
  exports: [GoEditorComponent]
})

export class GoEditorModule { }
