import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDocsComponent } from './button-docs.component';

describe('ButtonDocsComponent', () => {
  let component: ButtonDocsComponent;
  let fixture: ComponentFixture<ButtonDocsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
