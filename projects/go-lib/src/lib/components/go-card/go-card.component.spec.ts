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

  describe('shadow input', () => {
    it('applies shadow class by default', () => {
      const goCardTemplate: HTMLElement = fixture.nativeElement;
      const cardElement: HTMLElement = goCardTemplate.querySelector('.card')!;

      expect(cardElement.classList).not.toContain('card--no-shadow');
    });

    it('removes shadow when shadow is false', () => {
      component.shadow = false;
      fixture.detectChanges();

      const goCardTemplate: HTMLElement = fixture.nativeElement;
      const cardElement: HTMLElement = goCardTemplate.querySelector('.card')!;

      expect(cardElement.classList).toContain('card--no-shadow');
    });
  });

  describe('the template', () => {
    it('renders the header by default', () => {
      const goCardTemplate: HTMLElement = fixture.nativeElement;
      const headerElement: HTMLElement = goCardTemplate.querySelector('header')!;

      expect(headerElement).not.toBeNull();
    });

    it('hides the header if showHeader is false', () => {
      component.showHeader = false;
      fixture.detectChanges();

      const goCardTemplate: HTMLElement = fixture.nativeElement;
      const headerElement: HTMLElement | null = goCardTemplate.querySelector('header');

      expect(headerElement).toBeNull();
    });
  });
});
