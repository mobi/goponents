import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastDocsComponent } from './toast-docs.component';

describe('ToastDocsComponent', () => {
  let component: ToastDocsComponent;
  let fixture: ComponentFixture<ToastDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
