import { NgModule } from '@angular/core';
import { GoButtonComponent } from './components/go-button/go-button.component';
import { GoCardComponent } from './components/go-card/go-card.component';
import { GoIconComponent } from './components/go-icon/go-icon.component';
import { GoTableComponent } from './components/go-table/go-table.component';
import { GoMessageService } from './services/go-message/go-message.service';

@NgModule({
  imports: [
  ],
  declarations: [
    GoButtonComponent,
    GoCardComponent,
    GoIconComponent,
    GoTableComponent
  ],
  exports: [
    GoButtonComponent,
    GoCardComponent,
    GoIconComponent,
    GoTableComponent
  ],
  providers: [
    GoMessageService
  ]
})

export class GoSharedModule { }
