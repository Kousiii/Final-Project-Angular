import { TestBed } from '@angular/core/testing';

import { ReachusService } from './reachus.service';

describe('ReachusService', () => {
  let service: ReachusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReachusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
