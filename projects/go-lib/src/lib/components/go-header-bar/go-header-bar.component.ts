import { Component, OnInit } from '@angular/core';
import { GoHeaderBarService } from './go-header-bar.service';
import { GoHeaderBarItem } from './go-header-bar.interface';

@Component({
  selector: 'go-header-bar',
  templateUrl: './go-header-bar.component.html',
  styleUrls: ['./go-header-bar.component.scss']
})
export class GoHeaderBarComponent implements OnInit {

  currentItem: GoHeaderBarItem;

  constructor(private goHeaderBarService: GoHeaderBarService) { }

  ngOnInit(): void {
    this.goHeaderBarService.activeItem.subscribe((activeItem: GoHeaderBarItem) => {
      this.currentItem = activeItem;
    });
  }

  reset(): void {
    this.currentItem = null;
  }

  processBackBtn(): void {
    if (this.currentItem.backButtonFn.observers.length === 0) {
      this.currentItem.backButtonFn.subscribe(() => {
        window.history.back();
      });
    }

    this.currentItem.backButtonFn.emit();
  }
}
