import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GoActionSheetModule } from '../go-action-sheet/go-action-sheet.module';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';

import { GoSideNavComponent } from './go-side-nav/go-side-nav.component';
import { GoNavGroupComponent } from './go-nav-group/go-nav-group.component';
import { GoNavItemComponent } from './go-nav-item/go-nav-item.component';
import { GoConfigService } from '../../go-config.service';

@NgModule({
  declarations: [
    GoSideNavComponent,
    GoNavGroupComponent,
    GoNavItemComponent
  ],
  imports: [
    CommonModule,
    GoIconModule,
    GoIconButtonModule,
    RouterModule,
    GoActionSheetModule
  ],
  exports: [
    GoSideNavComponent,
    GoNavGroupComponent,
    GoNavItemComponent
  ],
  providers: [
    GoConfigService
  ]
})

export class GoSideNavModule { }
