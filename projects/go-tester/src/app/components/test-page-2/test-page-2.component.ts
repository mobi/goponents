import { Component, OnInit, ViewChild } from '@angular/core';
import {
  GoButtonComponent,
  GoConfigService,
  GoLoaderComponent,
  GoToasterService,
} from '../../../../../go-lib/src/public_api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-page-2',
  templateUrl: './test-page-2.component.html'
})
export class TestPage2Component implements OnInit {

  @ViewChild('loader') loader: GoLoaderComponent;

  brandingControl: FormControl;
  title: string = 'Test 2';
  shopping: boolean = false;
  loaderType: string = 'neutral';
  loading: boolean = true;

  constructor(
    private goToasterService: GoToasterService,
    private goConfigService: GoConfigService
  ) { }

  ngOnInit(): void {
    this.brandingControl = new FormControl(this.goConfigService.config.getValue().brandColor);

    setTimeout(() => {
      this.goToasterService.toastInfo({ message: 'Check this out'});
      this.goToasterService.toastSuccess({message: 'Check this out' });
      this.goToasterService.toastError({ message: 'Check this out' });
    }, 1500);
  }

  stopLoaderAnimation(): void {
    const loaderTypes: string[] = [
      'neutral',
      'negative',
      'positive'
    ];

    this.loaderType = loaderTypes[Math.floor(Math.random() * loaderTypes.length)];
    this.loading = !this.loading;
  }

  clickHey(): void {
    this.shopping = true;
    setTimeout(() => {
      this.shopping = false;
    }, 4000);
  }

  openToast(): void {
    this.goToasterService.toastInfo({ message: 'From the action sheet'});
  }

  updateColor(): void {
    this.goConfigService.setBrandColor(this.brandingControl.value);
  }
}
