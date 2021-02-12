import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'go-icon',
  templateUrl: 'go-icon.component.html',
  styleUrls: ['go-icon.component.scss']
})
export class GoIconComponent implements OnChanges {
  classObject: object = {};

  @Input() icon: string;
  @Input() iconModifier: 'light' | 'dark' | 'positive' | 'negative' | 'neutral';
  @Input() iconClass: string;
  @Input() disabled: boolean = false;

  ngOnChanges(): void {
    this.classObject = {};

    if (this.iconModifier) {
      this.classObject[`go-icon--${this.iconModifier}`] = true;
    }

    if (this.iconClass) {
      this.classObject[this.iconClass] = true;
    }

    if (this.disabled) {
      this.classObject['go-icon--disabled'] = true;
    }
  }
}
