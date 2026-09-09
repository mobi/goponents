import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoToasterComponent } from './go-toaster.component';
import { GoToastModule } from '../go-toast/go-toast.module';

@NgModule({
  declarations: [
    GoToasterComponent
  ],
  imports: [
    CommonModule,
    GoToastModule
  ],
  // GoToasterService is providedIn: 'root'; don't re-declare it here or it creates a second, non-singleton instance
  exports: [
    GoToasterComponent
  ]
})

export class GoToasterModule { }
