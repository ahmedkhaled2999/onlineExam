import { TestBed } from '@angular/core/testing';

import { AdaptForgetService } from './adapt-forget.service';

describe('AdaptForgetService', () => {
  let service: AdaptForgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdaptForgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
