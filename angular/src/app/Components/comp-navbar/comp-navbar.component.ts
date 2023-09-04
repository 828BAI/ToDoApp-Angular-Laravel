import { Component, /* ChangeDetectionStrategy */ } from '@angular/core';
import { GlobalStateService } from 'src/app/Services/State/global-state.service';
import { Path_Home, Path_Landing, Path_Login, Path_Register } from 'src/app/app-routing.module';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_Logout } from 'src/app/Special/Vars';

@Component({
    selector: 'app-comp-navbar',
    templateUrl: './comp-navbar.component.html',
    styleUrls: ['./comp-navbar.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompNavbarComponent {
    Path_Home = Path_Home
    Path_Register = Path_Register
    Path_Login = Path_Login
    Path_Landing = Path_Landing

    isLoggedIn$: Observable<boolean>;

    constructor(
        private globalStateService: GlobalStateService,
        private router: Router,
        private http: HttpClient
    ) {
        this.isLoggedIn$ = this.globalStateService.isLoggedIn$;
    }

    logout() {
        this.http.post(API_Logout, {}).subscribe({
            next: (response: any) => {

                this.globalStateService.setLoggedIn(false);
                this.router.navigate([Path_Landing]);
            }
        });

    }
}
