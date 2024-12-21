import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gComponetGuard } from './g-componet.guard';

describe('gComponetGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gComponetGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
