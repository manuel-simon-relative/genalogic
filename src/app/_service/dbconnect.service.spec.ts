import { TestBed } from '@angular/core/testing';

import { DbConnectService } from './dbconnect.service';

describe('DbconnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbConnectService = TestBed.get(DbConnectService);
    expect(service).toBeTruthy();
  });
});
