import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'off-canvas-test',
  templateUrl: './off-canvas-test.component.html'
})
export class OffCanvasTestComponent {
  selectData: any = [{
    value: 1,
    name: 'Harry'
  }, {
    value: 2,
    name: 'Hermione'
  }, {
    value: 3,
    name: 'Ron'
  }, {
    value: 4,
    name: 'Voldermort'
  }, {
    value: 5,
    name: 'Snake'
  }];
  selectControl: FormControl = new FormControl();
}
