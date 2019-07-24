import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoHeaderComponent } from './go-header.component';
import { GoIconButtonModule } from '../go-icon-button/go-icon-button.module';

describe('GoHeaderComponent', () => {
  let component: GoHeaderComponent;
  let fixture: ComponentFixture<GoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoHeaderComponent ],
      imports: [
        GoIconButtonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
