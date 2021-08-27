import { Component, Input, OnInit } from '@angular/core';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

@Component({
  selector: 'go-text-area',
  templateUrl: './go-text-area.component.html'
})
export class GoTextAreaComponent extends GoFormBaseComponent implements OnInit {

  @Input() maxlength: number;
  @Input() minlength: number;
  @Input() rows: number;

  ngOnInit(): void {
    this.validateMinMax();
  }

  private validateMinMax(): void {
    if (this.maxlength && this.minlength && this.minlength > this.maxlength) {
      this.minlength = 0;
    }
  }
}
