import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoHintComponent } from './go-hint.component';

@NgModule({
  imports: [
    GoHintComponent,CommonModule],
  exports: [GoHintComponent]
})
export class GoHintModule { }
