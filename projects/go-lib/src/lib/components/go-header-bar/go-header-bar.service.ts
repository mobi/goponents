import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GoHeaderBarItem } from './go-header-bar.interface';

@Injectable({
  providedIn: 'root'
})
export class GoHeaderBarService {

  activeItem: Subject<GoHeaderBarItem> = new Subject<GoHeaderBarItem>();

}
