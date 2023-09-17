import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
    const authGuardInstance: AuthGuard = TestBed.inject(AuthGuard);

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(authGuardInstance).toBeTruthy();
    });
});
