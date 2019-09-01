import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DateAdapter } from '../date-adapter';

@Component({
  selector: 'go-calendar-year-view',
  styleUrls: ['./go-calendar-year-view.component.scss'],
  templateUrl: './go-calendar-year-view.component.html',
})
export class GoCalendarYearViewComponent implements OnInit {
  focusedYear: object;
  years: object[][];
  firstYear: object;
  lastYear: object;

  @Input() year: object;
  @Input() dateAdapter: DateAdapter;

  @Output() setView: EventEmitter<string> = new EventEmitter<string>();
  @Output() setYear: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        event.preventDefault();
        this.setFocusedYear(this.focusedYear['year'] + 4);
        break;
      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
        event.preventDefault();
        this.setFocusedYear(this.focusedYear['year'] - 4);
        break;
      case 'Left': // IE/Edge specific value
      case 'ArrowLeft':
        event.preventDefault();
        this.setFocusedYear(this.focusedYear['year'] - 1);
        break;
      case 'Right': // IE/Edge specific value
      case 'ArrowRight':
        event.preventDefault();
        this.setFocusedYear(this.focusedYear['year'] + 1);
        break;
      case 'Enter':
        event.preventDefault();
        this.pickYear(this.focusedYear['year']);
        break;
      default:
        return;
    }
  }

  ngOnInit(): void {
    this.setUpYears(this.year['year'] - 15);
    this.setFocusedYear(this.year['year']);
  }

  public nextYearGroup(): void {
    this.setUpYears(this.lastYear['year'] + 1);
    this.setFocusedYear(this.focusedYear['year'] + 24);
  }

  public previousYearGroup(): void {
    this.setUpYears(this.firstYear['year'] - (6 * 4));
    this.setFocusedYear(this.focusedYear['year'] - 24);
  }

  public switchView(): void {
    this.setView.emit('day');
  }

  public pickYear(year: number): void {
    this.setYear.emit(year);
    this.setView.emit('month');
  }

  private setUpYears(startYear: number): void {
    this.years = [];
    this.firstYear = this.createYear(startYear);

    for (let row: number = 0; row < 6; row++) {
      this.years.push([]);
      for (let col: number = 0; col < 4; col++) {
        const currentYear: number = startYear + (4 * row) + col;
        this.years[row].push(this.createYear(currentYear));

        if (!this.focusedYear && this.years[row][col]['selected']) {
          this.focusedYear = this.findYear(currentYear);
        }
      }
    }
    this.lastYear = this.years[5][3];
  }

  private setFocusedYear(year: number): void {
    this.focusedYear['focused'] = false;
    if (year > this.lastYear['year']) {
      this.nextYearGroup();
    } else if (year < this.firstYear['year']) {
      this.previousYearGroup();
    }
    this.focusedYear = this.findYear(year);
    this.focusedYear['focused'] = true;
  }

  private findYear(year: number): object {
    const row: number = Math.floor((year - this.firstYear['year']) / 4);
    const col: number = (year - this.firstYear['year']) % 4;
    return this.years[row][col];
  }

  private createYear(year: number): object {
    const isSelected: boolean = year === this.year['year'];
    return {
      year: year,
      selected: isSelected,
      translated: this.dateAdapter.getYearName(year)
    };
  }
}
