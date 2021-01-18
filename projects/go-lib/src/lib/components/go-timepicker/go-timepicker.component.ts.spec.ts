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
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    afterEach(() => {
      component.selectedTime = null;
    });

    it('check with date object', () => {
      const time: string = '05:15 AM';
      component.control.setValue(new Date('2017-04-30 05:15:00'));
      component.ngOnInit();

      expect(component.changeTimeFormat(component.selectedTime)).toBe(time);
    });

    it('change the time format 24hr to 12hr', () => {
      component.control.setValue('18:15:00');
      const time: string = '06:15 PM';
      component.ngOnInit();

      expect(component.selectedTime).toEqual(time);
    });
  });

  describe('timePicked', () => {
    afterEach(() => {
      component.selectedTime = null;
    });

    it('set the time with AM', () => {
      const time: string = '10:20 AM';
      const goTimeFormat: GoTimeFormat = {
        hours: '10',
        minutes: '20',
        ampm: 'AM',
      };
      component.timePicked(goTimeFormat);

      expect(component.selectedTime).toEqual(time);
    });

    it('set the time with PM', () => {
      const time: string = '10:20 PM';
      const goTimeFormat: GoTimeFormat = {
        hours: '10',
        minutes: '20',
        ampm: 'PM',
      };
      component.timePicked(goTimeFormat);

      expect(component.selectedTime).toEqual(time);
    });

    it('clear selected time', () => {
      const time: string = '';
      component.timePicked(null);

      expect(component.selectedTime).toEqual(time);
    });
  });

  describe('toggleTimepicker', () => {
    afterEach(() => {
      component.selectedTime = null;
    });

    it('should not open timepicker if control is disabled', () => {
      component.control.disable();

      component.toggleTimepicker(new Event('click'));

      expect(component.timeOpen).toBe(false);
    });

    it('change selected time format to 24H', () => {
      component.selectedTime = '05:42 PM';
      const convertTime: string = '17:42';

      component.toggleTimepicker(new Event('click'));
      expect(component.openTimeValue).toBe(convertTime);
    });
  });
});
