import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './config/routes/app-routing.module';

import {
  GoActionSheetModule,
  GoFooterModule,
  GoHeaderModule,
  GoIconButtonModule,
  GoIconModule,
  GoLayoutModule,
  GoModalModule,
  GoOffCanvasModule,
  GoSideNavModule,
  GoToasterModule
} from '../../../go-lib/src/public_api';

import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    GoActionSheetModule,
    GoFooterModule,
    GoIconButtonModule,
    GoHeaderModule,
    GoIconModule,
    GoLayoutModule,
    GoModalModule,
    GoOffCanvasModule,
    GoSideNavModule,
    GoToasterModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js')
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
