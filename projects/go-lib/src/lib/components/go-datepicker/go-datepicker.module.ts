import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoDatepickerComponent } from './go-datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoCalendarComponent } from './go-calendar.component';
import { GoCalendarDayViewComponent } from './day-view/go-calendar-day-view.component';
import { GoCalendarYearViewComponent } from './year-view/go-calendar-year-view.component';
import { GoCalendarMonthViewComponent } from './month-view/go-calendar-month-view.component';

@NgModule({
  declarations: [
    GoCalendarComponent,
    GoCalendarDayViewComponent,
    GoCalendarMonthViewComponent,
    GoCalendarYearViewComponent,
    GoDatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GoIconButtonModule,
    GoHintModule
  ],
  exports: [GoDatepickerComponent]
})
export class GoDatepickerModule { }
