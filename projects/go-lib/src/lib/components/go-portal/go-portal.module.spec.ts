import { Component, DebugElement } from '@angular/core';
import { GoPortalModule } from './go-portal.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div class="starship">
      <ng-container goPortalTarget="enterprise"></ng-container>
    </div>`
})
class TestPortalTargetComponent { }

// tslint:disable-next-line:max-classes-per-file
@Component({
  template: `
    <span *goPortalAttachTo="'enterprise'" id="kirk">Beam me up, Scotty!</span>
  `
})
class TestPortalAttachToComponent { }

describe('GoPortalModule', () => {
  let targetFixture: ComponentFixture<TestPortalTargetComponent>;
  let attachTofixture: ComponentFixture<TestPortalAttachToComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestPortalTargetComponent,
        TestPortalAttachToComponent,
      ],
      imports: [
        GoPortalModule,
      ],
    }).compileComponents();
    targetFixture =  TestBed.createComponent(TestPortalTargetComponent);
    attachTofixture =  TestBed.createComponent(TestPortalAttachToComponent);

    targetFixture.detectChanges();
    attachTofixture.detectChanges();
  });

  it('should not render the template in the component it is declared in', () => {
    const kirkSpan: DebugElement = attachTofixture.debugElement.query(By.css('#kirk'));

    expect(kirkSpan).not.toBeTruthy();
  });

  it('should render the template in the portal target with a matching name', () => {
    const portalTarget: DebugElement = targetFixture.debugElement.query(By.css('.starship'));

    expect(portalTarget.nativeElement.innerText).toContain('Beam me up, Scotty!');
  });
});
