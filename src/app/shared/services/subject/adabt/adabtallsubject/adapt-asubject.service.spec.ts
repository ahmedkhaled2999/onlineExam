import { TestBed } from '@angular/core/testing';

import { AdaptAsubjectService } from './adapt-asubject.service';

describe('AdaptAsubjectService', () => {
  let service: AdaptAsubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdaptAsubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
