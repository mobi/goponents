import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './config/routes/app-routing.module';

import {
  GoActionSheetModule,
  GoFooterModule,
  GoHeaderModule,
  GoIconButtonModule,
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
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          bash: () => import('highlight.js/lib/languages/bash'),
          scss: () => import('highlight.js/lib/languages/scss'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          xml: () => import('highlight.js/lib/languages/xml'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
