import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'go-progress-bar',
  templateUrl: './go-progress-bar.component.html',
  styleUrls: ['./go-progress-bar.component.scss'],
})
export class GoProgressBarComponent implements OnChanges {
  @Input() mode: 'determinate' | 'indeterminate' = 'determinate';
  @Input() value: number;
  @Input() leftLabel?: string;
  @Input() rightLabel?: string;

  indicatorWidth: number;

  ngOnChanges(changes: SimpleChanges): void {
    if ('value' in changes) {
      setTimeout(() => {
        this.indicatorWidth = changes.value.currentValue;
      }, 500);
    }
  }
}
