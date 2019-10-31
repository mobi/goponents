import { Component } from '@angular/core';
import { GoToasterService } from 'projects/go-lib/src/public_api';

@Component({
  selector: 'app-toast-docs',
  templateUrl: './toast-docs.component.html'
})
export class ToastDocsComponent {

  showDismissToast: boolean = true;

  pageTitle: string = 'Toasts';

  componentBindings: string = `
  @Input() dismissable: boolean = false;
  @Input() header: string;
  @Input() message: string;
  @Input() type: string;

  @Output() handleDismiss = new EventEmitter();
  `;

  basic_html: string = `
  <go-toast header="Success!" message="The thing you did saved successfully." type="positive"></go-toast>
  <go-toast header="Hey!" message="Did you know that this is pretty cool?"></go-toast>
  <go-toast header="Oh No!" message="The thing you did didn't work right." type="negative"></go-toast>
  <go-toast header="HTML Example" type="positive"
            message='&#x2192; <a href="https://github.com/mobi/goponents" target="_blank">#1 Design System</a> &#x2190;'></go-toast>
  `;

  dismiss_html: string = `
  <go-toast *ngIf="showDismissToast"
            header="Heads Up!"
            message="We use cookies and stuff, so watch out.  You can dismiss me."
            [dismissable]="true"
            (handleDismiss)="dismissed()"></go-toast>
  `;

  dismiss_ts: string = `
  showDismissToast = true;

  dismissed() {
    this.showDismissToast = false;
  }
  `;

  toaster_ts: string = `
  import { GoToasterService } from '@tangoe/goponents';

  constructor(private toasterService: GoToasterService) { }

  this.toasterService.toastSuccess({ message: 'You clicked the button!' });
  `;

  toaster_app_ts: string = `
  import { GoToasterModule } from '@tangoe/goponents';

  NgModule({
    imports: [
      GoToasterModule
    ]
  });
  `;

  toaster_app_html: string = `
  <go-toaster></go-toaster>
  `;

  constructor(private toasterService: GoToasterService) { }

  dismissed(): void {
    this.showDismissToast = false;
    this.toasterService.toastInfo({ message: 'Dismissed Item' });

    setTimeout(() => {
      this.showDismissToast = true;
    }, 3000);
  }

  sendToast(): void {
    this.toasterService.toastSuccess({ message: 'You clicked the button!' });
  }

}
