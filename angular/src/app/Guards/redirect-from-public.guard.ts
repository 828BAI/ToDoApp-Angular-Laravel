import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { GlobalStateService } from '../Services/State/global-state.service';
import { Path_Home } from '../app-routing.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class RedirectFromPublicGuard {
    constructor(
        private globalStateService: GlobalStateService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.globalStateService.isLoggedIn$.pipe(
            map((isLoggedIn) => {
                if (isLoggedIn) {
                    this.router.navigate([Path_Home]); 
                    return false; // Prevent access to the route
                }
                return true; // Allow access to the route
            })
        );
    }
}
