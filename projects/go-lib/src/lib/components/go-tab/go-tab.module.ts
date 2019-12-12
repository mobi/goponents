import { NgModule } from '@angular/core';

import { GoTabComponent } from './go-tab.component';
import { CommonModule } from '@angular/common';
import { GoTabGroupComponent } from './go-tab-group.component';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoCardModule } from '../go-card/go-card.module';


@NgModule({
  declarations: [
    GoTabComponent,
    GoTabGroupComponent
  ],
  imports: [
    CommonModule,
    GoButtonModule,
    GoCardModule
  ],
  exports: [
    GoTabComponent,
    GoTabGroupComponent
  ]
})

export class GoTabModule { }
