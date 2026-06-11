import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarDocsComponent } from './header-bar-docs.component';

describe('HeaderBarDocsComponent', () => {
  let component: HeaderBarDocsComponent;
  let fixture: ComponentFixture<HeaderBarDocsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBarDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
