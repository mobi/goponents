import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GoHeaderModule  } from '../go-header/go-header.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoModalModule } from '../go-modal/go-modal.module';
import { GoOffCanvasModule } from '../go-off-canvas/go-off-canvas.module';
import { GoToasterModule } from '../go-toaster/go-toaster.module';
import { GoHeaderBarModule } from '../go-header-bar/go-header-bar.module';

import { GoModalService } from '../go-modal/go-modal.service';
import { GoOffCanvasService } from '../go-off-canvas/go-off-canvas.service';
import { GoToasterService } from '../go-toaster/go-toaster.service';

import { GoLayoutComponent } from './go-layout.component';

@NgModule({
  declarations: [
    GoLayoutComponent
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    // Goponents
    GoHeaderModule,
    GoHeaderBarModule,
    GoLoaderModule,
    GoModalModule,
    GoOffCanvasModule,
    GoToasterModule
  ],
  exports: [
    GoLayoutComponent
  ],
  providers: [
    GoModalService,
    GoOffCanvasService,
    GoToasterService
  ]
})

export class GoLayoutModule { }
