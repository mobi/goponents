import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'go-icon',
  templateUrl: 'go-icon.component.html',
  styleUrls: ['go-icon.component.scss']
})
export class GoIconComponent {
  @Input() icon: string;
  @Input() iconModifier: string;
  @Input() iconClass: string;

  public classObject(): object {
    let classes: object = {}; // tslint:disable-line:prefer-const

    if (this.iconModifier) {
      classes[`go-icon--${this.iconModifier}`] = true;
    }

    if (this.iconClass) {
      classes[this.iconClass] = true;
    }

    return classes;
  }
}
