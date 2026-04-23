import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

// Module Imports
import { GoCardModule, GoCopyCardLinkModule, GoCopyModule } from '../../../../../go-lib/src/public_api';
import { SharedModule } from '../../shared/shared.module';

// Module Routes
import { DashboardRoutesModule } from './routes/dashboard-routing.module';

// Module Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';

@NgModule({
  imports: [
    DashboardRoutesModule,
    GoCardModule,
    GoCopyCardLinkModule,
    GoCopyModule,
    HighlightModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    GettingStartedComponent
  ]
})

export class DashboardModule { }
