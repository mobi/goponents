import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GoTabComponent } from './go-tab.component';
import { GoTabGroupComponent } from './go-tab-group.component';


@NgModule({
  imports: [
    CommonModule,
    GoTabComponent,
    GoTabGroupComponent
  ],
  exports: [
    GoTabComponent,
    GoTabGroupComponent
  ]
})

export class GoTabModule { }
