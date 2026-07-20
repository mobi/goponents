import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'go-input-group',
  templateUrl: './go-input-group.component.html',
  styleUrls: ['./go-input-group.component.scss']
})
export class GoInputGroupComponent {

  @Input() label: string;

}
