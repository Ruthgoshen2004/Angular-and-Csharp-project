import { TestBed } from '@angular/core/testing';

import { CpaService } from './cpa.service';

describe('CpaService', () => {
  let service: CpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
