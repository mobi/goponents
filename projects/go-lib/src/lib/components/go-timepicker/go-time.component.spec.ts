import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoTimeComponent } from './go-time.component';
import { FormsModule } from '@angular/forms';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoTimeFormat } from './go-time-format.model';

describe('GoTimeComponent', () => {
  let component: GoTimeComponent;
  let fixture: ComponentFixture<GoTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoTimeComponent],
      imports: [GoIconButtonModule, GoButtonModule, FormsModule],
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

  describe('ngOnInit', () => {
    afterEach(() => {
      component.selectedTime = null;
    });

    it('check hour with time format', () => {
      component.selectedTime = '18:15';
      const hour: string = '06';
      component.ngOnInit();

      component.changeTimeFormat(component.selectedTime);
      expect(component.hour).toBe(hour);
    });

    it('check minute with time format', () => {
      component.selectedTime = '18:15';
      const minute: string = '15';
      component.ngOnInit();

      component.changeTimeFormat(component.selectedTime);
      expect(component.minute).toBe(minute);
    });

    it('check time with format for AM and PM button display', () => {
      component.selectedTime = '18:15';
      const format: boolean = false;
      component.ngOnInit();

      component.changeTimeFormat(component.selectedTime);
      expect(component.format).toBe(format);
    });

    it('check time format with no selected time', () => {
      component.selectedTime = null;
      const goTimeFormat: GoTimeFormat = {
        hours: '05',
        minutes: '15',
        ampm: 'am',
      };
      component.ngOnInit();

      component.formatAMPM(new Date('2017-04-30 05:15:00'));
      expect(component.goTimeFormat).toEqual(goTimeFormat);
    });
  });
});
