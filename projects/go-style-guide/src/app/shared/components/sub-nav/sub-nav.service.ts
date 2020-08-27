import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubNavService {
  pageTitle: string;
  linkToSource?: string;
}
