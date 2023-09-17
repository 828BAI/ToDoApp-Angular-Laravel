import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { RedirectFromPublicGuard } from './redirect-from-public.guard';

describe('redirectFromPublicGuard', () => {
    const redirectFromPublicGuard: RedirectFromPublicGuard = TestBed.inject(RedirectFromPublicGuard);

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(redirectFromPublicGuard).toBeTruthy();
    });
});
