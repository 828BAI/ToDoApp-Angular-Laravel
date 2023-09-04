import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLandingComponent } from './Pages/page-landing/page-landing.component';
import { PageRegisterComponent } from './Pages/page-register/page-register.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageMainComponent } from './Pages/page-main/page-main.component';
import { AuthGuard } from './Guards/auth.guard';
import { RedirectFromPublicGuard } from './Guards/redirect-from-public.guard';

export const Path_Home = '/'
export const Path_Landing = '/landing'
export const Path_Register = '/register'
export const Path_Login = '/login'

const routes: Routes = [
    {
        path: Path_Landing.slice(1),
        component: PageLandingComponent
    },
    {
        path: Path_Register.slice(1),
        component: PageRegisterComponent,
        canActivate: [RedirectFromPublicGuard]
    },
    {
        path: Path_Login.slice(1),
        component: PageLoginComponent,
        canActivate: [RedirectFromPublicGuard]
    },
    {
        path: Path_Home.slice(1),
        component: PageMainComponent,
        canActivate: [AuthGuard]
    },
    // { path: '**', redirectTo: Path_Landing, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
