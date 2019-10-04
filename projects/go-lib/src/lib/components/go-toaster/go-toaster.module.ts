import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoToasterService } from './go-toaster.service';
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
  providers: [
    GoToasterService
  ],
  exports: [
    GoToasterComponent
  ]
})

export class GoToasterModule { }
