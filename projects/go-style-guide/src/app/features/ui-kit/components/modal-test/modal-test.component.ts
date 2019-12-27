import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html'
})
export class ModalTestComponent {

  @Input() content: string;

}
