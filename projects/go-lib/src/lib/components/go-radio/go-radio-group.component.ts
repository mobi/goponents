import { AfterContentChecked, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';
import { GoFormService } from '../../services/form.service';
import { GoRadioButtonComponent } from './go-radio-button.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';
@Component({
    selector: 'go-radio-group',
    templateUrl: './go-radio-group.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GoHintModule, GoRequiredTextModule, GoFormErrorsModule],
})
export class GoRadioGroupComponent extends GoFormBaseComponent implements AfterContentChecked {
  radioButtonCount: number = 0;

  @Input() legend: string;
  @Input() enableFieldset: boolean = true;
  @Input() enableLegend: boolean = true;

  @ContentChildren(GoRadioButtonComponent, { descendants: true }) radioButtons: QueryList<GoRadioButtonComponent>;

  constructor(private _goFormService: GoFormService) {
    super(_goFormService);
  }

  ngAfterContentChecked(): void {
    // Only want to set all of these if the number of radio buttons change
    if (this.radioButtons.length !== this.radioButtonCount) {
      const radioGroupName: string = this._goFormService.generateId(this.legend, 'radio-group');
      this.radioButtonCount = this.radioButtons.length;

      this.radioButtons.toArray().forEach((button: GoRadioButtonComponent) => {
        button.theme = this.theme;
        button.control = this.control;
        button.name = radioGroupName;
        button.detectChanges();
      });
    }
  }

  getFieldsetClasses(): { [k: string]: boolean } {
    return {
      ...this._goFormService.baseFieldsetClasses(this.control, this.theme),
      'go-form__fieldset': this.enableFieldset
    };
  }
}
