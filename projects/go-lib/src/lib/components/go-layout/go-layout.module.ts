import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GoHeaderModule  } from '../go-header/go-header.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoModalModule } from '../go-modal/go-modal.module';
import { GoOffCanvasModule } from '../go-off-canvas/go-off-canvas.module';
import { GoToasterModule } from '../go-toaster/go-toaster.module';

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
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    // Goponents
    GoHeaderModule,
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
