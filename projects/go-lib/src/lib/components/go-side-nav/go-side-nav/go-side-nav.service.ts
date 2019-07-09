import { Injectable } from '@angular/core';
import { Observable, of as observableOf, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GoSideNavService {
  public navOpen = true;

  constructor() { }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
