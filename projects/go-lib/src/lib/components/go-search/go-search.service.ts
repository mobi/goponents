import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoSearchService {

  /**
   * Whether or not the service making requests returned results
   */
  hasResults: boolean = false;

  /**
   * The message to be shown when no results are returned from the server that match the search term
   */
  noResultsMessage: string = 'No Results Found';

  /**
   * Whether or not to show the noResultsMessage
   */
  showNoResultsMessage: boolean = false;

  /**
   * Whether or not to show the loader in the search bar
   */
  showLoader: boolean = false;

  /**
   * The term entered by the user to search
   */
  searchTerm: Subject<string> = new Subject<string>();

  /**
   * Minimum number of characters to trigger a search
   */
  termLength: number = 3;

  /**
   * Use this method to update the search term
   * @param term {string} The search term entered by the user
   */
  updateSearchTerm(term: string): void {
    this.searchTerm.next(term);
  }

  /**
   * Use this method when you get a response from
   * the server that was successful, **with results**
   */
  successResponse(): void {
    this.hasResults = true;
    this.showLoader = false;
    this.showNoResultsMessage = false;
  }

  /**
   * Use this method when you get a response from
   * the server that was successful, but **with no results**
   */
  notFoundResponse(): void {
    this.hasResults = false;
    this.showLoader = false;
    this.showNoResultsMessage = true;
  }
}
