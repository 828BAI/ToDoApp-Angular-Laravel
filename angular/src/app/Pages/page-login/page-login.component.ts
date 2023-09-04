import { HttpClient } from '@angular/common/http';
import { Component, /* ChangeDetectionStrategy */ } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStateService } from 'src/app/Services/State/global-state.service';
import { API_Login } from 'src/app/Special/Vars';
import { Path_Home, Path_Register } from 'src/app/app-routing.module';

@Component({
    selector: 'app-page-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLoginComponent {

    Path_Register = Path_Register

    formData = {
        email: '',
        password: ''
    };
    showPassword = false;
    errorMessage = '';



    constructor(
        private globalStateService: GlobalStateService,
        private router: Router,
        private http: HttpClient
    ) { }

    onSubmit() {
        // Make an HTTP POST request to your backend for registration
        this.http.post(API_Login, this.formData).subscribe({
            next: (response: any) => {
                // Successful registration
                this.globalStateService.setLoggedIn(true);

                // Redirect to the desired page (e.g., dashboard)
                this.router.navigate([Path_Home]);
            },
            error: (error) => {
                // Display the error message in the HTML
                this.errorMessage = error.error.message;
            }
        });
    }

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
}
