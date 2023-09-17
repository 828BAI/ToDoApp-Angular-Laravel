import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Path_Main, Path_Landing } from 'src/app/app-routing.routes';
import { API_Login, API_Logout, API_Register } from 'src/app/shared/api.routes';

@Injectable({
    providedIn: 'root',
})
export class UserStateService {
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    private errorSubject = new BehaviorSubject<string>('');


    get isLoggedInSubjectGetter$() {
        return this.isLoggedInSubject
    }

    get errorSubjectGetter$() {
        return this.errorSubject
    }

    set errorSubjectSetter(ERROR: string) {
        this.errorSubject.next(ERROR)
    }


    setLoggedIn(value: boolean) {
        // Update the BehaviorSubject and store the value in local storage
        this.isLoggedInSubject.next(value);
        localStorage.setItem('isLoggedIn', JSON.stringify(value));
    }


    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        // Retrieve the value from local storage during service initialization
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedLoggedIn !== null) {
            this.isLoggedInSubject.next(JSON.parse(storedLoggedIn));
        }
    }

    login(FORMDATA: Object) {
        // Make an HTTP POST request to your backend for registration
        this.http.post(API_Login, FORMDATA).subscribe({
            next: (response: any) => {
                // Successful registration
                this.setLoggedIn(true);

                // Redirect to the desired page (e.g., dashboard)
                this.router.navigate([Path_Main]);
            },
            error: (error) => {
                // Display the error message in the HTML
                this.errorSubject.next(error.error.message);
            }
        });
    }

    logout() {
        this.http.post(API_Logout, {}).subscribe({
            next: (response: any) => {
                this.setLoggedIn(false);
                this.router.navigate([Path_Landing]);
            }
        });

    }

    register(FORMDDATA: object) {
        // Make an HTTP POST request to your backend for registration
        this.http.post(API_Register, FORMDDATA).subscribe({
            next: (response: any) => {
                // Successful registration
                // Assuming your backend returns a success message or user data
                this.setLoggedIn(true);

                // Redirect to the desired page (e.g., dashboard)
                this.router.navigate([Path_Main]);
            },
            error: (error) => {
                // Handle registration error
                // Display the error message in the HTML
                this.errorSubject.next(error.error.message);
            }
        });
    }
}
