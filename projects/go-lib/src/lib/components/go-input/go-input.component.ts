import { Component, Input, OnInit } from '@angular/core';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

@Component({
  selector: 'go-input',
  templateUrl: './go-input.component.html',
  styleUrls: ['./go-input.component.scss']
})
export class GoInputComponent extends GoFormBaseComponent implements OnInit {

  @Input() maxlength: number = 524288;
  @Input() minlength: number = 0;
  @Input() inputType: string = 'text';

  ngOnInit(): void {
    if (this.minlength > this.maxlength) {
      this.minlength = 0;
    }

    if (this.maxlength > 524288) {
      this.maxlength = 524288;
    }
  }
}
