import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyDocsComponent } from './copy-docs.component';

describe('ButtonDocsComponent', () => {
  let component: CopyDocsComponent;
  let fixture: ComponentFixture<CopyDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
