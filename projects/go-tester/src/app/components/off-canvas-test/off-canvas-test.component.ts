import { Component, Input } from '@angular/core';

@Component({
  selector: 'off-canvas-test',
  templateUrl: './off-canvas-test.component.html'
})
export class OffCanvasTestComponent {
  @Input() header: string = '';
}
