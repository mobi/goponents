import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { GettingStartedComponent } from '../components/getting-started/getting-started.component';

 const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'getting-started', component: GettingStartedComponent }
];

 @NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutesModule { }
