import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestPage1Component } from './components/test-page-1/test-page-1.component';
import { TestPage2Component } from './components/test-page-2/test-page-2.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  { path: '', redirectTo: 'test-page-1', pathMatch: 'full' },
  { path: 'test-page-1', component: TestPage1Component, canActivate: [AppGuard] },
  { path: 'test-page-2', component: TestPage2Component, canActivate: [AppGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
