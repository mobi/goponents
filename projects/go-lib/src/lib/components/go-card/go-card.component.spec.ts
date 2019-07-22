import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoCardComponent } from './go-card.component';

describe('GoCardComponent', () => {
  let component: GoCardComponent;
  let fixture: ComponentFixture<GoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the template', () => {
    it('renders the header by default', () => {
      const goCardTemplate: HTMLElement = fixture.nativeElement;
      const headerElement: HTMLElement = goCardTemplate.querySelector('header');

      expect(headerElement).not.toBeNull();
    });

    it('hides the header if showHeader is false', () => {
      component.showHeader = false;
      fixture.detectChanges();

      const goCardTemplate: HTMLElement = fixture.nativeElement;
      const headerElement: HTMLElement = goCardTemplate.querySelector('header');

      expect(headerElement).toBeNull();
    });
  });
});
