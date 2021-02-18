import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

// Module Routes
import { StandardsRoutesModule } from './routes/standards-routing.module';

import { GoSharedModule } from '../../../../../go-lib/src/public_api';

// Module Components
import { ColorsComponent } from './components/colors/colors.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridComponent } from './components/grid/grid.component';
import { StandardsComponent } from './components/standards/standards.component';
import { TypographyComponent } from './components/typography/typography.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    HighlightModule,
    StandardsRoutesModule,
    GoSharedModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
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
