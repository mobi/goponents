import { NgModule } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';
import { StandardsModule } from './standards/standards.module';
import { UiKitModule } from './ui-kit/ui-kit.module';

// ====================================================================================
// Features Module
// ---------------------------------------------------------------------------------
// The FeaturesModule is a location where we can include all of the feature modules
// that our application has. A feature would be defined as a group of functionality.
// For example, the Dashboard would be considered a feature. Activities would be
// considered another feature.
// ====================================================================================

@NgModule({
  imports: [
    DashboardModule,
    StandardsModule,
    UiKitModule
  ]
})
export class FeaturesModule { }
