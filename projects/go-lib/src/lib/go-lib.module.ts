import { NgModule } from '@angular/core';
import { GoButtonModule } from './components/go-button/go-button.module';
import { GoCardModule } from './components/go-card/go-card.module';
import { GoIconModule } from './components/go-icon/go-icon.module';
import { GoTableModule } from './components/go-table/go-table.module';
import { GoMessageModule } from './services/go-message/go-message.module';

@NgModule({
  declarations: [],
  imports: [
    GoButtonModule,
    GoCardModule,
    GoIconModule,
    GoTableModule,
    GoMessageModule
  ],
  exports: [
    GoButtonModule,
    GoCardModule,
    GoIconModule,
    GoTableModule,
    GoMessageModule
  ]
})

export class GoSharedModule { }
