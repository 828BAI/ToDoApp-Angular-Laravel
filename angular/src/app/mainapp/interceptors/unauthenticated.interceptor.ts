import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserStateService } from '../services/state/user-state.service';
import { Path_Landing } from 'src/app/app-routing.routes';

@Injectable()
export class UnauthenticatedInterceptor implements HttpInterceptor {
    constructor(
        private userStateService: UserStateService,
        private router: Router
    ) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap({
                next: (event) => {
                    if (event instanceof HttpResponse && event.status === 401) {
                        // Set the global state to "not logged in".
                        this.userStateService.setLoggedIn(false);

                        // Redirect to the landing page.
                        this.router.navigate([Path_Landing]); // Adjust the route as needed
                    }
                },
                error: (error) => {
                    if (error.status === 401) {
                        // Set the global state to "not logged in".
                        this.userStateService.setLoggedIn(false);

                        // Redirect to the landing page.
                        this.router.navigate([Path_Landing]);
                    }
                }
            })
        );
    }
}