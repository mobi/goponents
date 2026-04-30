import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoAccordionComponent } from './go-accordion.component';
import { GoAccordionPanelComponent } from './go-accordion-panel.component';
import { GoIconModule } from '../go-icon/go-icon.module';

@NgModule({
  imports: [
    GoAccordionComponent,
    GoAccordionPanelComponent,
    CommonModule,
    GoIconModule
  ],
  exports: [
    GoAccordionComponent,
    GoAccordionPanelComponent
  ]
})

export class GoAccordionModule { }
