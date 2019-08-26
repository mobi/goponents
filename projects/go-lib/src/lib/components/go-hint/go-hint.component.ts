import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'go-hint',
  styleUrls: ['./go-hint.component.scss'],
  templateUrl: './go-hint.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoHintComponent implements OnChanges, OnInit {
  hintClasses: object = {};

  @Input() label: string;
  @Input() type: 'error' | 'info' | 'positive';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() message: string;

  ngOnChanges(changes: SimpleChanges): void {
    if ('type' in changes) {
      ['error', 'info', 'positive'].forEach((type: string) => {
        this.hintClasses[`go-hint--${type}`] = changes.type.currentValue === type;
      });
    }

    if ('theme' in changes) {
      this.hintClasses['go-hint--dark'] = this.theme === 'dark';
    }
  }

  ngOnInit(): void {
    if (this.type === 'error' && this.label === undefined) {
      this.label = 'Error:';
    }
  }
}
