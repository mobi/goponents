import { NgModule } from '@angular/core';
import { GoInfiniteScrollDirective } from './go-infinite-scroll.directive';
import { GoInfiniteScrollService } from './go-infinite-scroll.service';

@NgModule({
  declarations: [
    GoInfiniteScrollDirective
  ],
  exports: [
    GoInfiniteScrollDirective
  ],
  providers: [
    GoInfiniteScrollService
  ]
})
export class GoInfiniteScrollModule { }
