import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GoIconModule } from '../go-icon/go-icon.module';

import { GoSideNavComponent } from './go-side-nav/go-side-nav.component';
import { GoNavGroupComponent } from './go-nav-group/go-nav-group.component';
import { GoNavItemComponent } from './go-nav-item/go-nav-item.component';
import { GoBrandingService } from '../../go-branding.service';

@NgModule({
  declarations: [
    GoSideNavComponent,
    GoNavGroupComponent,
    GoNavItemComponent
  ],
  imports: [
    CommonModule,
    GoIconModule,
    RouterModule
  ],
  exports: [
    GoSideNavComponent,
    GoNavGroupComponent,
    GoNavItemComponent
  ],
  providers: [
    GoBrandingService
  ]
})

export class GoSideNavModule { }
