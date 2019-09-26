import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GoBrandingService {
  brandColor: BehaviorSubject<string> = new BehaviorSubject<string>('#65B360');

  public setBrandColor(color: string): void {
    this.brandColor.next(color);
  }
}
