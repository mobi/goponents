export interface CalendarCell {
  disabled?: boolean;
  focused?: boolean;
  selected?: boolean;
  translated: string;
  value: number;
}

export interface CalendarCellDate {
  disabled?: boolean;
  focused?: boolean;
  selected?: boolean;
  translated: string;
  value: Date;
}
