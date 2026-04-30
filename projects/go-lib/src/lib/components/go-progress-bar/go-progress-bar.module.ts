import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoProgressBarComponent } from './go-progress-bar.component';



@NgModule({
  imports: [
    GoProgressBarComponent,
    CommonModule
  ],
  exports: [
    GoProgressBarComponent
  ]
})
export class GoProgressBarModule { }
