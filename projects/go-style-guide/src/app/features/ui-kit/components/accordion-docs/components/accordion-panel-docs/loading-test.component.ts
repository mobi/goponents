import { DemoImportsModule } from 'projects/go-style-guide/src/app/shared/demo-imports.module';
import { Component } from '@angular/core';
import { GoToasterService } from 'projects/go-lib/src/public_api';

@Component({
    imports: [DemoImportsModule],
    selector: 'app-loading-test',
    template: '',
})
export class LoadingTestComponent {
  constructor(private toasterService: GoToasterService) {
    this.toasterService.toastSuccess({ message: 'Component loaded' });
  }
}
