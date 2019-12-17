import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { GoHeaderBarModule } from '../go-header-bar/go-header-bar.module';

import { GoLayoutComponent } from './go-layout.component';
import { RouterModule } from '@angular/router';
import { GoLoaderModule } from '../go-loader/go-loader.module';
import { GoModalModule } from '../go-modal/go-modal.module';
import { GoModalService } from '../go-modal/go-modal.service';
import { GoOffCanvasModule } from '../go-off-canvas/go-off-canvas.module';
import { GoOffCanvasService } from '../go-off-canvas/go-off-canvas.service';
import { GoToasterModule } from '../go-toaster/go-toaster.module';
import { GoToasterService } from '../go-toaster/go-toaster.service';

describe('GoLayoutComponent', () => {
  let component: GoLayoutComponent;
  let fixture: ComponentFixture<GoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoLayoutComponent ],
      imports: [
        BrowserAnimationsModule,
        GoHeaderBarModule,
        GoLoaderModule,
        GoModalModule,
        GoOffCanvasModule,
        GoToasterModule,
        RouterModule,
        RouterTestingModule
      ],
      providers: [
        GoModalService,
        GoOffCanvasService,
        GoToasterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
