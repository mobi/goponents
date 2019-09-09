interface Cell {
  disabled?: boolean;
  focused?: boolean;
  selected?: boolean;
  translated: string;
}

export interface CalendarCell extends Cell {
  value: number;
}

export interface CalendarCellDate extends Cell {
  value: Date;
}
