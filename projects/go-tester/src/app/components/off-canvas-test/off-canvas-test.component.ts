import { TesterImportsModule } from 'projects/go-tester/src/app/tester-imports.module';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    imports: [TesterImportsModule],
    selector: 'off-canvas-test',
    templateUrl: './off-canvas-test.component.html',
})
export class OffCanvasTestComponent {
  selectControl: FormControl = new FormControl();
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
}
