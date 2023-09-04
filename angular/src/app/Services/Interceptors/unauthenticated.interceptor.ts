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
import { GlobalStateService } from 'src/app/Services/State/global-state.service';
import { Router } from '@angular/router';
import { Path_Landing } from 'src/app/app-routing.module';

@Injectable()
export class UnauthenticatedInterceptor implements HttpInterceptor {
    constructor(
        private globalStateService: GlobalStateService,
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
                        this.globalStateService.setLoggedIn(false);

                        // Redirect to the landing page.
                        this.router.navigate([Path_Landing]); // Adjust the route as needed
                    }
                },
                error: (error) => {
                    if (error.status === 401) {
                        // Set the global state to "not logged in".
                        this.globalStateService.setLoggedIn(false);

                        // Redirect to the landing page.
                        this.router.navigate([Path_Landing]); 
                    }
                }
            })
        );
    }
}
