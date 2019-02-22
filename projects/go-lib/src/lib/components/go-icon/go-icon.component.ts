import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'go-icon',
  templateUrl: 'go-icon.component.html',
  styleUrls: ['go-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoIconComponent {
  @Input() icon: String;
}
