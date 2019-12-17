import { Component } from '@angular/core';
import { GoToasterService } from 'projects/go-lib/src/public_api';

@Component({
  selector: 'app-loading-test',
  template: ''
})
export class LoadingTestComponent {
  constructor(private toasterService: GoToasterService) {
    this.toasterService.toastSuccess({ message: 'Component loaded' });
  }
}
