import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

@Component({
  selector: 'go-checkbox',
  templateUrl: './go-checkbox.component.html'
})
export class GoCheckboxComponent extends GoFormBaseComponent implements OnChanges, AfterViewInit {

  @Input() indeterminate: boolean = false;

  @ViewChild('hiddenInputRef') hiddenInputRef: ElementRef;

  ngOnChanges(): void {
    if (this.hiddenInputRef) {
      this.setIndeterminateState();
    }
  }

  ngAfterViewInit(): void {
    this.setIndeterminateState();
  }

  private setIndeterminateState(): void {
    this.hiddenInputRef.nativeElement.indeterminate = this.indeterminate;
  }
}
