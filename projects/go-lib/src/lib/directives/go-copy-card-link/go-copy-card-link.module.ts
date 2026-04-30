import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoCopyCardLinkDirective } from './go-copy-card-link.directive';

@NgModule({
  imports: [
    GoCopyCardLinkDirective
  ],
  exports: [
    GoCopyCardLinkDirective
  ]
})

export class GoCopyCardLinkModule { }
