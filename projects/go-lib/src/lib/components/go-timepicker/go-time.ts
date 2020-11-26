import { Subject } from 'rxjs';

export class GoTime {
  private timeOpen: boolean = false;
  timeWindowOpen: Subject<boolean> = new Subject<boolean>();

  selectedTime: string;

  constructor() {
    this.setTimeStatus(false);
  }

  public openTime(time): void {
    this.selectedTime = time;
    this.setTimeStatus(true);
  }

  public closeTime(): void {
    this.setTimeStatus(false);
  }

  get isOpen(): boolean {
    return this.timeOpen;
  }

  private setTimeStatus(isOpen: boolean = true): void {
    this.timeOpen = isOpen;
    this.timeWindowOpen.next(isOpen);
  }
}
