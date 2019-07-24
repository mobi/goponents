import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoIconButtonModule} from '../go-icon-button/go-icon-button.module';
import { GoSideNavModule } from '../go-side-nav/go-side-nav.module';

import { GoSideNavService } from '../go-side-nav/go-side-nav/go-side-nav.service';

import { GoHeaderComponent } from './go-header.component';

@NgModule({
  declarations: [
    GoHeaderComponent
  ],
  imports: [
    CommonModule,
    GoIconButtonModule,
    GoSideNavModule
  ],
  exports: [
    GoHeaderComponent
  ],
  providers: [
    GoSideNavService
  ]
})

export class GoHeaderModule { }
