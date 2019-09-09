import { Injectable } from '@angular/core';

@Injectable()
export class GoBrandingService {
  brandColor: string;

  constructor() {
    this.brandColor = '#65B360';
  }

  public setBrandColor(color: string): void {
    this.brandColor = color;
  }
}
