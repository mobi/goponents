import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigInterface } from './go-config.model';

@Injectable()
export class GoConfigService {
  config: BehaviorSubject<ConfigInterface> = new BehaviorSubject<ConfigInterface> ({
    brandColor: '#65B360'
  });

  public setBrandColor(color: string): void {
    const config: ConfigInterface = this.config.getValue();
    config.brandColor = color;
    this.config.next(config);
  }
}
