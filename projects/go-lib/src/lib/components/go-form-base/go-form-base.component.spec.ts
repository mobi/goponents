import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoFormBaseComponent } from './go-form-base.component';

describe('GoFormBaseComponent', () => {
  let component: GoFormBaseComponent;
  let fixture: ComponentFixture<GoFormBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoFormBaseComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoFormBaseComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('Durmstrang');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component._id).not.toBeNull();
  });

  describe('generateId', () => {
    it('should set id to a random string if no key', () => {
      component._id = null;
      component['generateId']();
      expect(component._id).not.toBeNull();
    });

    it('should set id to the key if passed', () => {
      component.key = 'Hogwarts';
      component['generateId']();
      expect(component._id).toBe('Hogwarts');
    });
  });
});
