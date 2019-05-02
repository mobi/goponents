import { NgModule } from '@angular/core';
import { GoAccordionModule  } from './components/go-accordion/go-accordion.module';
import { GoButtonModule } from './components/go-button/go-button.module';
import { GoCardModule } from './components/go-card/go-card.module';
import { GoIconModule } from './components/go-icon/go-icon.module';
import { GoMessageModule } from './services/go-message/go-message.module';
import { GoModalModule } from './components/go-modal/go-modal.module';
import { GoTableModule } from './components/go-table/go-table.module';
import { GoToastModule } from './components/go-toast/go-toast.module';

@NgModule({
  imports: [
    GoAccordionModule,
    GoButtonModule,
    GoCardModule,
    GoIconModule,
    GoMessageModule,
    GoModalModule,
    GoTableModule,
    GoToastModule
  ],
  exports: [
    GoAccordionModule,
    GoButtonModule,
    GoCardModule,
    GoIconModule,
    GoMessageModule,
    GoModalModule,
    GoTableModule,
    GoToastModule
  ]
})

export class GoSharedModule { }
