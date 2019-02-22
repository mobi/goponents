import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoAccordionComponent } from './go-accordion.component';
import { GoAccordionPanelComponent } from './go-accordion-panel.component';

@NgModule({
  declarations: [
    GoAccordionComponent,
    GoAccordionPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoAccordionComponent,
    GoAccordionPanelComponent
  ]
})

export class GoAccordionModule { }
