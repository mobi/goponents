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

import { provideHighlightOptions } from 'ngx-highlightjs';


@NgModule({
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
    AppComponent,
  ],
  providers: [
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        bash: () => import('highlight.js/lib/languages/bash'),
        scss: () => import('highlight.js/lib/languages/scss'),
        sass: () => import('highlight.js/lib/languages/scss'),
        css: () => import('highlight.js/lib/languages/css'),
        typescript: () => import('highlight.js/lib/languages/typescript'),
        xml: () => import('highlight.js/lib/languages/xml'),
        html: () => import('highlight.js/lib/languages/xml'),
        json: () => import('highlight.js/lib/languages/json'),
      },
      highlightOptions: {
        // Restrict auto-detection to these languages only.
        // SCSS is registered but excluded from auto-detection because its
        // grammar outscores TypeScript for @Input() decorator patterns.
        languages: ['typescript', 'xml', 'bash']
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
