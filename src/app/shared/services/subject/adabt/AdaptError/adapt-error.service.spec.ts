import { TestBed } from '@angular/core/testing';

import { AdaptErrorService } from './adapt-error.service';

describe('AdaptErrorService', () => {
  let service: AdaptErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdaptErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
