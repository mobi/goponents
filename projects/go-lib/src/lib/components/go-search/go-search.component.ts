import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { searchLoaderAnim, searchResultsAnim } from '../../animations/search.animation';
import { GoSearchService } from './go-search.service';

@Component({
  selector: 'go-search',
  templateUrl: './go-search.component.html',
  styleUrls: ['./go-search.component.scss'],
  animations: [searchLoaderAnim, searchResultsAnim]
})
export class GoSearchComponent implements OnInit {

  goSearchForm: FormGroup;
  searchActive: boolean = false;
  resultsOverflow: string = 'hidden';

  @HostListener('document:click') onDocumentClick(event) {
    this.closeSearchEvent(event);
  }

  constructor(
    public goSearchService: GoSearchService,
    private elementRef: ElementRef,
    private fb: FormBuilder
  ) {
    this.goSearchForm = this.fb.group({
      term: ''
    });
  }

  ngOnInit(): void {
    this.goSearchForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(changes => {
      if (changes['term'].length >= this.goSearchService.termLength) {
        this.goSearchService.showNoResultsMessage = false;
        this.goSearchService.showLoader = true;
        this.goSearchService.updateSearchTerm(changes['term']);
      } else {
        this.goSearchService.showNoResultsMessage = false;
        this.goSearchService.hasResults = false;
        this.goSearchService.showLoader = false;
      }
    });
  }

  resultsStarted(event: AnimationEvent): void {
    this.resultsOverflow = 'hidden';
  }

  resultsEnded(event: AnimationEvent): void {
    this.resultsOverflow = event.toState === null ? 'auto' : 'hidden';
  }

  toggleActive(): void {
    this.searchActive = true;
  }

  leaveInput(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
      this.closeSearch();
    }
  }

  closeSearchEvent(event: any): void {
    if (event && !this.elementRef.nativeElement.contains(event.target)) {
      this.closeSearch();
    }
  }

  closeSearch(): void {
    this.searchActive = false;
    this.goSearchService.hasResults = false;
    this.goSearchService.showNoResultsMessage = false;
    this.goSearchForm.reset('', {onlySelf: true, emitEvent: false});
  }
}
