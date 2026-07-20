import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { StandardsRoutesModule } from './standards-routing.module';

describe('StandardsRoutesModule', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StandardsRoutesModule]
    });

    router = TestBed.inject(Router);
  });

  it('should register the colors route', () => {
    expect(router.config.some((route) => route.path === 'standards/colors')).toBeTruthy();
  });
});
