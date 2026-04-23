import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  GoButtonModule,
  GoIconModule
} from 'projects/go-lib/src/public_api';

import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { SubNavService} from './components/sub-nav/sub-nav.service';
import { CodeBlockComponent } from './components/code-block/code-block.component';

@NgModule({
  declarations: [
    SubNavComponent
  ],
  imports: [
    CommonModule,
    GoIconModule,
    GoButtonModule,
    RouterModule,
    CodeBlockComponent
  ],
  exports: [
    SubNavComponent,
    CodeBlockComponent
  ],
  providers: [
    SubNavService
  ]
})
export class SharedModule { }
