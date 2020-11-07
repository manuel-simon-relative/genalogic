import { TestBed } from '@angular/core/testing';

import { Server } from './server';

describe('ServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Server = TestBed.get(Server);
    expect(service).toBeTruthy();
  });
});
