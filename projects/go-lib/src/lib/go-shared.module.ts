import { NgModule } from '@angular/core';
import { GoAccordionModule  } from './components/go-accordion/go-accordion.module';
import { GoButtonModule } from './components/go-button/go-button.module';
import { GoCardModule } from './components/go-card/go-card.module';
import { GoIconModule } from './components/go-icon/go-icon.module';
import { GoLoaderModule } from './components/go-loader/go-loader.module';
import { GoModalModule } from './components/go-modal/go-modal.module';
import { GoSideNavModule } from './components/go-side-nav/go-side-nav.module';
import { GoTableModule } from './components/go-table/go-table.module';
import { GoToastModule } from './components/go-toast/go-toast.module';
import { GoToasterModule } from './components/go-toaster/go-toaster.module';
import { GoIconButtonModule } from './components/go-icon-button/go-icon-button.module';

@NgModule({
  imports: [
    GoAccordionModule,
    GoButtonModule,
    GoCardModule,
    GoIconModule,
    GoIconButtonModule,
    GoLoaderModule,
    GoModalModule,
    GoSideNavModule,
    GoTableModule,
    GoToastModule,
    GoToasterModule
  ],
  exports: [
    GoAccordionModule,
    GoButtonModule,
    GoCardModule,
    GoIconModule,
    GoIconButtonModule,
    GoLoaderModule,
    GoModalModule,
    GoSideNavModule,
    GoTableModule,
    GoToastModule,
    GoToasterModule
  ]
})

export class GoSharedModule { }
