import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoAccordionComponent } from './go-accordion.component';
import { GoAccordionPanelComponent } from './go-accordion-panel.component';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoBrandingService } from '../../go-branding.service';

@NgModule({
  declarations: [
    GoAccordionComponent,
    GoAccordionPanelComponent
  ],
  imports: [
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoAccordionComponent,
    GoAccordionPanelComponent
  ],
  providers: [
    GoBrandingService
  ]
})

export class GoAccordionModule { }
