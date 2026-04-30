import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoCheckboxComponent } from './go-checkbox.component';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
@Component({
    selector: 'go-checkbox-group',
    templateUrl: './go-checkbox-group.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GoHintModule, GoRequiredTextModule, GoFormErrorsModule],
})
export class GoCheckboxGroupComponent extends GoFormBaseComponent implements AfterContentInit {

  @Input() legend: string;

  @ContentChildren(GoCheckboxComponent, { descendants: true }) checkboxes: QueryList<GoCheckboxComponent>;

  ngAfterContentInit(): void {
    this.checkboxes.toArray().forEach((checkbox: GoCheckboxComponent) => {
      checkbox.theme = this.theme;
    });
  }
}
