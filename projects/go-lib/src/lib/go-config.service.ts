import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GoConfigInterface } from './go-config.model';

@Injectable()
export class GoConfigService {
  config: BehaviorSubject<GoConfigInterface> = new BehaviorSubject<GoConfigInterface> ({
    brandColor: '#65B360'
  });

  public setBrandColor(color: string): void {
    // we have to copy the config here or it won't regester a change in components
    const config: GoConfigInterface = Object.assign({}, this.config.getValue());
    config.brandColor = color;
    this.config.next(config);
  }
}
