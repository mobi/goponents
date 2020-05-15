import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GoSearchComponent } from './go-search.component';

import { GoIconModule } from '../go-icon/go-icon.module';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoSearchService } from './go-search.service';

describe('GoSearchComponent', () => {
  let component: GoSearchComponent;
  let fixture: ComponentFixture<GoSearchComponent>;
  let goSearchService: GoSearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoSearchComponent ],
      imports: [
        CommonModule,
        GoIconModule,
        GoLoaderModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoSearchComponent);
    component = fixture.componentInstance;
    goSearchService = TestBed.get(GoSearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    // TODO: Add tests for goSearchForm.valueChanges

    it('subscribes to the focusOnSearchEvent on the GoSearchService', () => {
      spyOn(goSearchService.focusOnSearchEvent, 'subscribe').and.callThrough();

      component.ngOnInit();

      expect(goSearchService.focusOnSearchEvent.subscribe).toHaveBeenCalled();
    });
  });

  describe('keyDown', () => {
    it ('should emit the arrowDownEvent on the GoSearchService if the keyboard event is ArrowDown', () => {
      const event: Partial<KeyboardEvent> = { code: 'ArrowDown'};
      spyOn(goSearchService.arrowDownEvent, 'emit').and.callThrough();

      component.keyDown(event);

      expect(goSearchService.arrowDownEvent.emit).toHaveBeenCalled();
    });

    it('should not emit the arrowDownEvent on the GoSearchService if the keyboard event was not ArrowDown', () => {
      const event: Partial<KeyboardEvent> = { code: 'ArrowUp' };
      spyOn(goSearchService.arrowDownEvent, 'emit').and.callThrough();

      component.keyDown(event);

      expect(goSearchService.arrowDownEvent.emit).not.toHaveBeenCalled();
    });
  });

  describe('focusOnSearch', () => {
    it('should focus on the nativeElement of the searchInput when focusOnSearchEvent is fired from the GoSearchService', () => {
      spyOn(goSearchService.focusOnSearchEvent, 'emit').and.callThrough();
      spyOn(component.searchInput.nativeElement, 'focus').and.callThrough();

      component.focusOnSearch();
      goSearchService.focusOnSearchEvent.emit();

      expect(component.searchInput.nativeElement.focus).toHaveBeenCalled();
    });
  });
});
