import { TestBed } from '@angular/core/testing';

import { GoMessageService } from './go-message.service';

describe('GoMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoMessageService = TestBed.get(GoMessageService);
    expect(service).toBeTruthy();
  });
});
