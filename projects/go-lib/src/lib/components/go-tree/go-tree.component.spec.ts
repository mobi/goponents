import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoIconModule } from '../go-icon/go-icon.module';
import { GoTreeComponent } from './go-tree.component';

describe('GoTreeComponent', () => {
  let component: GoTreeComponent;
  let fixture: ComponentFixture<GoTreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoTreeComponent, 
        GoIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
