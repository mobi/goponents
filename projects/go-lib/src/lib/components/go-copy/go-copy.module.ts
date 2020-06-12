import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoCopyComponent } from './go-copy.component';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoCopyDocLinkDirective } from './go-copy-doc-link.directive';

@NgModule({
  declarations: [
    GoCopyComponent,
    GoCopyDocLinkDirective
  ],
  imports: [
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoCopyComponent,
    GoCopyDocLinkDirective
  ]
})

export class GoCopyModule { }
