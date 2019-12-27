import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GoTabComponent } from './go-tab.component';
import { GoTabGroupComponent } from './go-tab-group.component';


@NgModule({
  declarations: [
    GoTabComponent,
    GoTabGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoTabComponent,
    GoTabGroupComponent
  ]
})

export class GoTabModule { }
