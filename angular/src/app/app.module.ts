import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CompNavbarComponent } from './mainapp/components/comp-navbar/comp-navbar.component';
import { UnauthenticatedInterceptor } from './mainapp/interceptors/unauthenticated.interceptor';



@NgModule({
    declarations: [
        AppComponent,
        CompNavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UnauthenticatedInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
