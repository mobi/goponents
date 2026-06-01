import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoRequiredTextComponent } from './go-required-text.component';
import { FormControl, Validators } from '@angular/forms';

describe('GoRequiredTextComponent', () => {
  let component: GoRequiredTextComponent;
  let fixture: ComponentFixture<GoRequiredTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoRequiredTextComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoRequiredTextComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('control', new FormControl(''));
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
      fixture.componentRef.setInput('control', new FormControl('', Validators.required));

      fixture.detectChanges();

      const span: HTMLElement = fixture.nativeElement.querySelector('span');

      expect(span).not.toBeNull();
    });
  });
});
