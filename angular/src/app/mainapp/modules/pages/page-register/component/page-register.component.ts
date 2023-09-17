import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Path_Login } from 'src/app/app-routing.routes';
import { UserStateService } from 'src/app/mainapp/services/state/user-state.service';



@Component({
    selector: 'app-page-register',
    templateUrl: './page-register.component.html',
    styleUrls: ['./page-register.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageRegisterComponent implements OnInit {
    ngOnInit(): void {
        this.userStateService.errorSubjectSetter = ''
    }

    Path_Login = Path_Login

    formData = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    };

    showPassword: boolean = false;


    errorMessage$;


    constructor(
        private userStateService: UserStateService,
    ) {
        this.errorMessage$ = this.userStateService.errorSubjectGetter$
    }

    register() {
        this.userStateService.register(this.formData)
    }

}
