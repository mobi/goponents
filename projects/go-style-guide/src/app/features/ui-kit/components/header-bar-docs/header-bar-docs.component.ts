import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GoToasterService } from '../../../../../../../go-lib/src/public_api';

@Component({
  selector: 'app-header-bar-docs',
  templateUrl: './header-bar-docs.component.html',
  styleUrls: ['./header-bar-docs.component.scss']
})
export class HeaderBarDocsComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Header Bar';

  backArrowSwitchControl: FormControl = new FormControl();

  showBackArrow: boolean = true;

  inputsBindings: string = `
  @Input() title: string;
  @Input() showBackArrow: boolean;
  @Output() handleBackButton: EventEmitter<any>;
  `;

  exampleCode: string = `
  <ng-template goHeaderBar heading="Header Bar Example" (handleBackButton)="customBackFunction" [showBackArrow]="true">
    <div class="go-button-group">
      <div class="go-button-group__item">
        <go-button>Cancel</go-button>
      </div>
      <div class="go-button-group__item">
        <go-button>Save</go-button>
      </div>
    </div>
  </ng-template> `;

  linkToSource: string = 'https://github.com/mobi/goponents/tree/dev/projects/go-lib/src/lib/components/go-header-bar';

  private destroy$: Subject<void> = new Subject();

  constructor(private toaster: GoToasterService) {
    this.backArrowSwitchControl.setValue(true);
  }

  ngOnInit(): void {
    this.backArrowSwitchControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => {
        this.showBackArrow = value;
        console.log(this.showBackArrow);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  cancelClick(): void {
    this.toaster.toastError({ message: 'Cancel clicked!' });
  }

  saveClick(): void {
    this.toaster.toastSuccess({ message: 'Save clicked' });
  }

  goBackClicked(): void {
    console.log(this);
    this.toaster.toastInfo({ message: 'Go Back Clicked' });
  }

}
