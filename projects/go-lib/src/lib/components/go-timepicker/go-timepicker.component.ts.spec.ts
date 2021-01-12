import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTimepickerComponent } from './go-timepicker.component';
import { GoTimeComponent } from './go-time.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoRequiredTextModule } from '../go-required-text/go-required-text.module';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoTimeFormat } from './go-time-format.model';

describe('GoTimepickerComponent', () => {
  let component: GoTimepickerComponent;
  let fixture: ComponentFixture<GoTimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoTimeComponent, GoTimepickerComponent],
      imports: [
        GoIconButtonModule,
        GoButtonModule,
        GoHintModule,
        FormsModule,
        GoHintModule,
        GoRequiredTextModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTimepickerComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    afterEach(() => {
      component.selectedTime = null;
    });

    it('set the time', () => {
      const time: string = '10:20 AM';
      const goTimeFormat: GoTimeFormat = {
        hours: '10',
        minutes: '20',
        ampm: 'AM',
      };
      fixture.detectChanges();
      component.timePicked(goTimeFormat);

      expect(component.selectedTime).toEqual(time);
    });

    it('clear selected time', () => {
      const time: string = '';
      fixture.detectChanges();
      component.timePicked(null);

      expect(component.selectedTime).toEqual(time);
    });

    it('change the time format 24hr to 12hr', () => {
      const time: string = '06:15 PM';
      const timeString: string = '18:15:00';
      fixture.detectChanges();

      expect(component.changeTimeFormat(timeString)).toBe(time);
    });
  });
});
