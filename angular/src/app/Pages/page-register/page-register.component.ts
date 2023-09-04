import { Component, /* ChangeDetectionStrategy */ } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { GlobalStateService } from 'src/app/Services/State/global-state.service';
import { Path_Home, Path_Login } from 'src/app/app-routing.module';
import { API_Register } from 'src/app/Special/Vars';

@Component({
    selector: 'app-page-register',
    templateUrl: './page-register.component.html',
    styleUrls: ['./page-register.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageRegisterComponent {
    Path_Login = Path_Login

    formData = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    };

    showPassword: boolean = false;
    errorMessage: string = ''; 

    constructor(
        private globalStateService: GlobalStateService,
        private router: Router,
        private http: HttpClient 
    ) { }

    register() {
        // Make an HTTP POST request to your backend for registration
        this.http.post(API_Register, this.formData).subscribe({
            next: (response: any) => {
                // Successful registration
                // Assuming your backend returns a success message or user data
                this.globalStateService.setLoggedIn(true);

                // Redirect to the desired page (e.g., dashboard)
                this.router.navigate([Path_Home]);
            },
            error: (error) => {
                // Handle registration error
                // Display the error message in the HTML
                this.errorMessage = error.error.message;
            }
        });
    }
}
