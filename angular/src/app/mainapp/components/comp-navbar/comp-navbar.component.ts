import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Path_Main, Path_Landing, Path_Login, Path_Register } from 'src/app/app-routing.routes';
import { UserStateService } from '../../services/state/user-state.service';



@Component({
    selector: 'app-comp-navbar',
    templateUrl: './comp-navbar.component.html',
    styleUrls: ['./comp-navbar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompNavbarComponent {
    Path_Main = Path_Main
    Path_Register = Path_Register
    Path_Login = Path_Login
    Path_Landing = Path_Landing



    isLoggedIn$;

    constructor(
        private userStateService: UserStateService,
    ) {
        this.isLoggedIn$ = this.userStateService.isLoggedInSubjectGetter$;
    }

    logout() {
        this.userStateService.logout()
    }


}
