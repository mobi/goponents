import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { GoTabComponent } from './go-tab.component';

describe('GoTabComponent', () => {
  let component: GoTabComponent;
  let fixture: ComponentFixture<GoTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoTabComponent, 
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('active', () => {
    it('should set loaded if active is set', () => {
      component.loaded = false;
      component.active = true;

      expect(component.loaded).toBe(true);
    });
  });
});
