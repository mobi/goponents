import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFileUploadComponent } from './go-file-upload.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoButtonModule } from '../go-button/go-button.module';
import { GoHintModule } from '../go-hint/go-hint.module';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';

describe('GoFileUploadComponent', () => {
  let component: GoFileUploadComponent;
  let fixture: ComponentFixture<GoFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoFileUploadComponent],
      imports: [
        CommonModule,
        FormsModule,
        GoButtonModule,
        GoHintModule,
        GoIconButtonModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
