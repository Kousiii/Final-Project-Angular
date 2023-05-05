import { TestBed } from '@angular/core/testing';

import { AddformService } from './addform.service';

describe('AddformService', () => {
  let service: AddformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
