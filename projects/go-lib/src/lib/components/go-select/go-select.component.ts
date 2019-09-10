import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'go-select',
  templateUrl: './go-select.component.html',
  styleUrls: ['./go-select.component.scss']
})
export class GoSelectComponent {
  @Input() bindLabel: string;
  @Input() bindValue: string;
  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() items: any[];
  @Input() multiple: boolean = false;
  @Input() theme: 'light';
}
