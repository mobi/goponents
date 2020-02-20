import {Component, OnDestroy, OnInit} from '@angular/core';
import { GoHeaderBarService } from './go-header-bar.service';
import { GoHeaderBarItem } from './go-header-bar.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'go-header-bar',
  templateUrl: './go-header-bar.component.html',
  styleUrls: ['./go-header-bar.component.scss']
})
export class GoHeaderBarComponent implements OnInit, OnDestroy {

  currentItem: GoHeaderBarItem;
  subscription: Subscription;

  constructor(private goHeaderBarService: GoHeaderBarService) { }

  ngOnInit(): void {
    this.subscription = this.goHeaderBarService.activeItem.subscribe((activeItem: GoHeaderBarItem) => {
      this.currentItem = activeItem;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  reset(): void {
    this.currentItem = null;
  }

  processBackBtn(): void {
    if (this.currentItem.backButtonFn.observers.length !== 0) {
      this.currentItem.backButtonFn.emit();
    } else {
      window.history.back();
    }
  }
}
