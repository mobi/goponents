import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTextAreaComponent } from './go-text-area.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoHintModule } from '../go-hint/go-hint.module';

describe('GoTextAreaComponent', () => {
  let component: GoTextAreaComponent;
  let fixture: ComponentFixture<GoTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoTextAreaComponent],
      imports: [
        FormsModule,
        GoHintModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTextAreaComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
