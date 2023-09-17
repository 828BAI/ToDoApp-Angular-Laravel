import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStateService } from '../../services/state/user-state.service';
import { Path_Landing } from 'src/app/app-routing.routes';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(
        private userStateService: UserStateService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.userStateService.isLoggedInSubjectGetter$.pipe(
            map((isLoggedIn) => {
                if (!isLoggedIn) {
                    this.router.navigate([Path_Landing]);
                }
                return isLoggedIn; 
            })
        );
    }
}
