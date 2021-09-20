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
  @Input() type: 'negative' | 'neutral' | 'positive';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() message: string;

  ngOnChanges(changes: SimpleChanges): void {
    if ('type' in changes) {
      ['negative', 'neutral', 'positive'].forEach((type: string) => {
        this.hintClasses[`go-hint--${type}`] = changes.type.currentValue === type;
      });
    }

    if ('theme' in changes) {
      this.hintClasses['go-hint--dark'] = changes.theme.currentValue === 'dark';
    }
  }

  ngOnInit(): void {
    if (this.type === 'negative' && !this.label) {
      this.label = 'Error';
    }
  }
}
