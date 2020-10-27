import { AnimationEvent } from '@angular/animations';
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { searchLoaderAnim, searchResultsAnim } from '../../animations/search.animation';
import { GoSearchService } from './go-search.service';

@Component({
  selector: 'go-search',
  templateUrl: './go-search.component.html',
  styleUrls: ['./go-search.component.scss'],
  animations: [searchLoaderAnim, searchResultsAnim]
})
export class GoSearchComponent implements OnInit, OnDestroy {

  goSearchForm: FormGroup;
  searchActive: boolean = false;
  resultsOverflow: string = 'hidden';

  private destroy$: Subject<void> = new Subject();

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  @HostBinding('class.go-search__parent')
  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement): void {
    this.closeSearchEvent(target);
  }

  constructor(
    public goSearchService: GoSearchService,
    private elementRef: ElementRef,
    private formBuilder: FormBuilder
  ) {
    this.goSearchForm = this.formBuilder.group({
      term: ''
    });
  }

  ngOnInit(): void {
    this.goSearchForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe((changes: string) => {
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

    this.focusOnSearch();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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

  leaveInput(event: FocusEvent): void {
    if (event.relatedTarget && !this.elementRef.nativeElement.contains(event.relatedTarget)) {
      this.closeSearch();
    }
  }

  keyDown(event: Partial<KeyboardEvent>): void {
    if (event.code === 'ArrowDown') {
      this.goSearchService.arrowDownEvent.emit();
    }
  }

  focusOnSearch(): void {
    this.goSearchService.focusOnSearchEvent.subscribe(() => {
      this.searchInput.nativeElement.focus();
    });
  }

  private closeSearchEvent(target: HTMLElement): void {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.closeSearch();
    }
  }

  private closeSearch(): void {
    this.searchActive = false;
    this.goSearchService.hasResults = false;
    this.goSearchService.showNoResultsMessage = false;
    this.goSearchForm.reset('', {onlySelf: true, emitEvent: false});
  }
}
