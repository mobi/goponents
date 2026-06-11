import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'go-input-group',
  templateUrl: './go-input-group.component.html',
  styleUrls: ['./go-input-group.component.scss'],
  imports: [CommonModule]
})
export class GoInputGroupComponent {

  @Input() label: string = '';

}
