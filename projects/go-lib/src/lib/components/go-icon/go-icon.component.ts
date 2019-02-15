import { Component, Input } from '@angular/core';

@Component({
  selector: 'go-icon',
  templateUrl: 'go-icon.component.html',
  styleUrls: ['go-icon.component.scss']
})
export class GoIconComponent {
  @Input() icon: String;
}
