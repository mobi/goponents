import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoCopyDocLinkDirective } from './go-copy-doc-link.directive';
import { GoCopyComponent } from './go-copy.component';
import { GoCopyModule } from './go-copy.module';
import { GoIconModule } from '../go-icon/go-icon.module';

@Component({
  template: `<go-copy cardId="testId" goCopyDocLink></go-copy>`
})
class TestParentComponent {}

fdescribe('GoCopyDocLinkDirective', () => {
  let fixture: ComponentFixture<TestParentComponent>;
  let elementRef: ElementRef;
  let goCopyComponent: GoCopyComponent;
  let directive: GoCopyDocLinkDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestParentComponent
      ],
      imports: [
        GoCopyModule,
        GoIconModule
      ]
    });

    fixture = TestBed.createComponent(TestParentComponent);
    elementRef = fixture.elementRef;
    goCopyComponent = TestBed.createComponent(GoCopyComponent).componentInstance;
    directive = new GoCopyDocLinkDirective(elementRef, goCopyComponent);
  });

  it('creates an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('adds a class of go-copy--card-header and sets the title of the element', () => {
      directive.ngOnInit();
      expect(elementRef.nativeElement.classList).toContain('go-copy--card-header');
      expect(elementRef.nativeElement.title).toBe('Copy the URL to this card');
    });


    it('sets the text of the element with the current url and an id selector', () => {
      directive.cardId = 'testId';
      directive.ngOnInit();
      expect(goCopyComponent.text).toBe('http://localhost:9876/context.html/#testId');
    });
  });
});
