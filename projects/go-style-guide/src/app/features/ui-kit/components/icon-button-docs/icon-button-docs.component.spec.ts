import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonDocsComponent } from './icon-button-docs.component';

describe('IconButtonDocsComponent', () => {
  let component: IconButtonDocsComponent;
  let fixture: ComponentFixture<IconButtonDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconButtonDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
