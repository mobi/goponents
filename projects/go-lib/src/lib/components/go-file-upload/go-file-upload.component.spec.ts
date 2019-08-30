import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFileUploadComponent } from './go-file-upload.component';

describe('GoFileUploadComponent', () => {
  let component: GoFileUploadComponent;
  let fixture: ComponentFixture<GoFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoFileUploadComponent ]
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
