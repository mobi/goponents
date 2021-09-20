import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { GoFormBaseComponent } from '../go-form-base/go-form-base.component';
import { GoFormService } from '../../services/form.service';

@Component({
  selector: 'go-radio-button',
  styleUrls: ['./go-radio-button.component.scss'],
  templateUrl: './go-radio-button.component.html'
})
export class GoRadioButtonComponent extends GoFormBaseComponent {

  name: string;

  @Input() formValue: string;

  constructor(private changeDetector: ChangeDetectorRef, goFormService: GoFormService) {
    super(goFormService);
  }

  detectChanges(): void {
    this.changeDetector.detectChanges();
  }
}
