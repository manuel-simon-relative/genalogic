import { TestBed } from '@angular/core/testing';

import { GlobalConstants } from './globalconstants.service';

describe('GlobalconstantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalConstants = TestBed.get(GlobalConstants);
    expect(service).toBeTruthy();
  });
});
