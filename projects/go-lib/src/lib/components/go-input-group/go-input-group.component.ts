import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'go-input-group',
  templateUrl: './go-input-group.component.html',
  styleUrls: ['./go-input-group.component.scss']
})
export class GoInputGroupComponent {

  @Input() label: string;

}
