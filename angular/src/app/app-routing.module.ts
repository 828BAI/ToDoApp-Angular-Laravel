import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path_Landing, Path_Login, Path_Main, Path_Register } from './app-routing.routes';
import { RedirectFromPublicGuard } from './mainapp/guards/redirect-from-public/redirect-from-public.guard';
import { AuthGuard } from './mainapp/guards/auth/auth.guard';


RedirectFromPublicGuard
const routes: Routes = [
    {
        path: Path_Landing.slice(1),
        loadChildren: () => import('./mainapp/modules/pages/page-landing/page-landing.module').then(m => m.PageLandingModule)
    },
    {
        path: Path_Register.slice(1),
        loadChildren: () => import('./mainapp/modules/pages/page-register/page-register.module').then(m => m.PageRegisterModule),
        canActivate: [RedirectFromPublicGuard]
    },
    {
        path: Path_Login.slice(1),
        loadChildren: () => import('./mainapp/modules/pages/page-login/page-login.module').then(m => m.PageLoginModule),
        canActivate: [RedirectFromPublicGuard]
    },
    {
        path: Path_Main.slice(1),
        loadChildren: () => import('./core-infrastructure/todo/todo.module').then(m => m.TodoModule),
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
