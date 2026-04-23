import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubNavService {
  private pageTitleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private linkToSourceSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

  pageTitle$: Observable<string> = this.pageTitleSubject.asObservable();
  linkToSource$: Observable<string | undefined> = this.linkToSourceSubject.asObservable();

  get pageTitle(): string {
    return this.pageTitleSubject.value;
  }

  set pageTitle(value: string) {
    this.pageTitleSubject.next(value || '');
  }

  get linkToSource(): string | undefined {
    return this.linkToSourceSubject.value;
  }

  set linkToSource(value: string | undefined) {
    this.linkToSourceSubject.next(value);
  }
}
