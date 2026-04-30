import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
@Component({
    selector: 'go-checkbox',
    templateUrl: './go-checkbox.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GoHintModule, GoRequiredTextModule, GoFormErrorsModule],
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
