import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

// Module Routes
import { StandardsRoutesModule } from './routes/standards-routing.module';

import { GoCardModule } from '../../../../../go-lib/src/public_api';
import { GoCopyModule } from '../../../../../go-lib/src/public_api';
import { GoCopyCardLinkModule } from 'projects/go-lib/src/lib/directives/go-copy-card-link/go-copy-card-link.module';
import { GoButtonModule } from '../../../../../go-lib/src/public_api';

// Module Components
import { ColorsComponent } from './components/colors/colors.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridComponent } from './components/grid/grid.component';
import { StandardsComponent } from './components/standards/standards.component';
import { TypographyComponent } from './components/typography/typography.component';

@NgModule({
  imports: [
    HighlightModule,
    StandardsRoutesModule,
    GoCardModule,
    GoCopyModule,
    GoCopyCardLinkModule,
    GoButtonModule
  ],
  declarations: [
    ColorsComponent,
    FormsComponent,
    GridComponent,
    StandardsComponent,
    TypographyComponent
  ]
})

export class StandardsModule { }
