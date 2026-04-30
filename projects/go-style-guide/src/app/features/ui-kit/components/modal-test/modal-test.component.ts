import { Component, Input } from '@angular/core';
import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';

@Component({
    imports: [DemoImportsModule],
    selector: 'app-modal-test',
    templateUrl: './modal-test.component.html',
})
export class ModalTestComponent {

  @Input() content: string;

}
