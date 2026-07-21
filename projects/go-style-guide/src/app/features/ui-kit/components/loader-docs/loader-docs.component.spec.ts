import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDocsComponent } from './loader-docs.component';

describe('LoaderDocsComponent', () => {
  let component: LoaderDocsComponent;
  let fixture: ComponentFixture<LoaderDocsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
