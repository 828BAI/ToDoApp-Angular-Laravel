import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { redirectFromPublicGuard } from './redirect-from-public.guard';

describe('redirectFromPublicGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => redirectFromPublicGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
