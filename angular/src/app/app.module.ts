import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompNavbarComponent } from './Components/comp-navbar/comp-navbar.component';
import { PageLandingComponent } from './Pages/page-landing/page-landing.component';
import { PageRegisterComponent } from './Pages/page-register/page-register.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PageMainComponent } from './Pages/page-main/page-main.component';
import { UnauthenticatedInterceptor } from './Services/Interceptors/unauthenticated.interceptor';
import { CompCardComponent } from './Components/comp-card/comp-card.component';



@NgModule({
    declarations: [
        AppComponent,
        CompNavbarComponent,
        PageLandingComponent,
        PageRegisterComponent,
        PageLoginComponent,
        PageMainComponent,
        CompCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        FormsModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UnauthenticatedInterceptor,
            multi: true, 
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
