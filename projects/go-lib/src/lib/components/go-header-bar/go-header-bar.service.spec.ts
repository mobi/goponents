import { TestBed } from '@angular/core/testing';

import { GoHeaderBarService } from './go-header-bar.service';

describe('GoHeaderBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoHeaderBarService = TestBed.get(GoHeaderBarService);
    expect(service).toBeTruthy();
  });
});
