import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Path_Register } from 'src/app/app-routing.routes';
import { UserStateService } from 'src/app/mainapp/services/state/user-state.service';

@Component({
    selector: 'app-page-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLoginComponent implements OnInit {
    ngOnInit(): void {
        this.userStateService.errorSubjectSetter = ''
    }

    Path_Register = Path_Register

    formData = {
        email: '',
        password: ''
    };
    showPassword = false;
    errorMessage$;



    constructor(
        private userStateService: UserStateService
    ) {
        this.errorMessage$ = userStateService.errorSubjectGetter$
    }

    onSubmit() {
        this.userStateService.login(this.formData)
    }


}
