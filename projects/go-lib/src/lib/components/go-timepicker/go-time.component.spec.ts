import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoTimeComponent } from './go-time.component';
import { FormsModule } from '@angular/forms';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoTimeFormat } from './go-time-format.model';
import { GoFormErrorsModule } from '../go-form-errors/go-form-errors.module';

describe('GoTimeComponent', () => {
  let component: GoTimeComponent;
  let fixture: ComponentFixture<GoTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoTimeComponent],
      imports: [
        GoIconButtonModule,
        GoFormErrorsModule,
        GoButtonModule,
        FormsModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTimeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });


  describe('increaseHour', () => {

    it('Hour will increase by one', () => {

      component.hour = '10';
      component.increaseHour();
      expect(component.hour).toEqual('11');
    });

    it('Hour will reset to 01 if hour will more than 12', () => {

      component.hour = '13';
      component.increaseHour();
      expect(component.hour).toEqual('01');
    });
  });

  describe('increaseMinute', () => {
    it('Minute will increase by one', () => {

      component.minute = '10';
      component.increaseMinute();
      expect(component.minute).toEqual('11');
    });

    it('Minute will reset to 00 if minute will more than 59', () => {

      component.minute = '60';
      component.increaseMinute();
      expect(component.minute).toEqual('00');
    });
  });

  describe('decreaseHour', () => {
    it('Hour will decrease by one', () => {

      component.hour = '10';
      component.decreaseHour();
      expect(component.hour).toEqual('09');
    });

    it('Hour will reset to 12 if hour will decrease to 01', () => {

      component.hour = '01';
      component.decreaseHour();
      expect(component.hour).toEqual('12');
    });
  });

  describe('decreaseMinute', () => {
    it('Minute will decrease by one', () => {

      component.minute = '10';
      component.decreaseMinute();
      expect(component.minute).toEqual('09');
    });

    it('Minute will reset to 59 if it will decrease to 00', () => {

      component.minute = '00';
      component.decreaseMinute();
      expect(component.minute).toEqual('59');
    });
  });

  describe('apply time', () => {
    it('check with time format after apply', () => {
      component.hour = '06';
      component.minute = '09';
      component.format = false;
      const timeFormat: GoTimeFormat = {
        hours: '06',
        minutes: '09',
        ampm: 'PM',
      };

      component.apply();
      expect(component.goTimeFormat).toEqual(timeFormat);
    });

    it('check with time format if hour and minute is not exist ', () => {
      const timeFormat: GoTimeFormat = {
        hours: '12',
        minutes: '00',
        ampm: 'AM',
      };

      component.apply();
      expect(component.goTimeFormat).toEqual(timeFormat);
    });
  });

  describe('validateInput', () => {
   it('hour and minute will not support more than two digit', () => {
        const event: KeyboardEvent = new KeyboardEvent('keypress', {key: '', });
        const regex: string =  '^([0-1]|[0][0-9]|[1][0-2])$';

        expect(component.validateInput(event, regex)).toBe(false);
    });
  });
});
