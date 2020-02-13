import { TestBed } from '@angular/core/testing';

import { ComparefunctionsService } from './comparefunctions.service';

describe('ComparefunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComparefunctionsService = TestBed.get(ComparefunctionsService);
    expect(service).toBeTruthy();
  });
});
