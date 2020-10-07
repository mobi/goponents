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
  <go-toast
    header="Success!"
    message="The thing you did saved successfully." type="positive">
  </go-toast>
  <go-toast
    header="Hey!"
    message="Did you know that this is pretty cool?" type="neutral">
  </go-toast>
  <go-toast
    header="Oh No!"
    message="The thing you did didn't work right." type="negative">
  </go-toast>
  <go-toast
    header="HTML Example"
    type="positive"
    message='&#x2192; <a href="https://github.com/mobi/goponents" target="_blank">#1 Design System</a> &#x2190;'>
  </go-toast>
  `;

  dismiss_html: string = `
  <go-toast
    *ngIf="showDismissToast"
    header="Heads Up!"
    message="We use cookies and stuff, so watch out.  You can dismiss me."
    [dismissable]="true"
    (handleDismiss)="dismissed()">
  </go-toast>
  `;
  action_btn_html: string = `
  <go-toast 
    type="neutral" 
    header="Hey!" 
    message="Did you know that this is pretty cool?" 
    [showToastActions]="true">
    <ng-container go-toast-action>
      <div class="go-button-group">
        <div class="go-button-group__item">
          <go-button buttonVariant="neutral">Button1</go-button>
        </div>
        <div class="go-button-group__item">
          <go-button buttonVariant="neutral">Button2</go-button>
        </div>
        <div class="go-button-group__item">
          <go-button buttonVariant="neutral">Button3</go-button>
        </div>
      </div>
    </ng-container>
  </go-toast>
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

  // you can adjust the duration of the toast by passing in the duration param:
  this.toasterService.toastSuccess({ message: 'You clicked the button!' }, 7000);
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

  toast_header_template_html: string = `
  <go-toast
    message="This toast is an example that uses a header template">
    <ng-template #headerContent>
      Header Content Template <go-icon icon="home"></go-icon>
    </ng-template>
  </go-toast>
  `;

  toast_message_template_html: string = `
  <go-toast
    header="Message Content Template">
    <ng-template #messageContent>
      This toast is an example that uses a message template <go-icon icon="home"></go-icon>
    </ng-template>
  </go-toast>
  `;

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-toast';

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
