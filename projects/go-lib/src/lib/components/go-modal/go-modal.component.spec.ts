import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoModalComponent } from './go-modal.component';
import { GoIconModule } from '../go-icon/go-icon.module';
import { GoModalService } from './go-modal.service';

describe('GoModalComponent', () => {
  let component: GoModalComponent;
  let fixture: ComponentFixture<GoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoModalComponent
      ],
      imports: [ GoIconModule ],
      providers: [ GoModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
