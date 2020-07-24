import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoCopyCardLinkDirective } from './go-copy-card-link.directive';
import { GoCopyComponent } from '../../components/go-copy/go-copy.component';
import { GoCopyModule } from '../../components/go-copy/go-copy.module';
import { GoIconModule } from '../../components/go-icon/go-icon.module';

@Component({
  template: `<go-copy cardId="testId" goCopyCardLink></go-copy>`
})
class TestParentComponent {}

describe('GoCopyCardLinkDirective', () => {
  let fixture: ComponentFixture<TestParentComponent>;
  let elementRef: ElementRef;
  let goCopyComponent: GoCopyComponent;
  let directive: GoCopyCardLinkDirective;

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
    directive = new GoCopyCardLinkDirective(elementRef, goCopyComponent);
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
