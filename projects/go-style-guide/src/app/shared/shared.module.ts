import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  GoIconModule
} from 'projects/go-lib/src/public_api';

import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { SubNavService} from './components/sub-nav/sub-nav.service';

@NgModule({
  declarations: [
    SubNavComponent
  ],
  imports: [
    CommonModule,
    GoIconModule,
    RouterModule
  ],
  exports: [
    SubNavComponent,
  ],
  providers: [
    SubNavService
  ]
})
export class SharedModule { }
