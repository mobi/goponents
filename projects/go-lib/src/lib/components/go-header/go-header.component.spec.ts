import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoHeaderComponent } from './go-header.component';
import { GoIconModule } from '../go-icon/go-icon.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GoConfigService } from '../../go-config.service';

describe('GoHeaderComponent', () => {
  let component: GoHeaderComponent;
  let fixture: ComponentFixture<GoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoHeaderComponent ],
      imports: [
        CommonModule,
        GoIconModule,
        RouterModule,
        RouterTestingModule
      ],
      providers: [
        GoConfigService
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
