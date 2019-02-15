import { TestBed } from '@angular/core/testing';

import { GoLibService } from './go-lib.service';

describe('GoLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoLibService = TestBed.get(GoLibService);
    expect(service).toBeTruthy();
  });
});
