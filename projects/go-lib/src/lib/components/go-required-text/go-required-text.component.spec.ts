import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoRequiredTextComponent } from './go-required-text.component';
import { FormControl, Validators } from '@angular/forms';

describe('GoRequiredTextComponent', () => {
  let component: GoRequiredTextComponent;
  let fixture: ComponentFixture<GoRequiredTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoRequiredTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoRequiredTextComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('validator', () => {
    it('should not render html if form control does not have required validator', () => {
      const span: HTMLElement = fixture.nativeElement.querySelector('span');

      expect(span).toBeNull();
    });

    it('should render html if form control has required validator', () => {
      component.control = new FormControl('', Validators.required);

      fixture.detectChanges();

      const span: HTMLElement = fixture.nativeElement.querySelector('span');

      expect(span).not.toBeNull();
    });
  });
});
