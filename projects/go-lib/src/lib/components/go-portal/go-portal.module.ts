import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoPortalAttachToDirective } from './go-portal-attach-to.directive';
import { GoPortalTargetDirective } from './go-portal-target.directive';



@NgModule({
  declarations: [GoPortalAttachToDirective, GoPortalTargetDirective],
  exports: [
    GoPortalTargetDirective,
    GoPortalAttachToDirective
  ],
  imports: [
    CommonModule
  ]
})
export class GoPortalModule { }
