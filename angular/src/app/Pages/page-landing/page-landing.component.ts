import { HttpClient } from '@angular/common/http';
import { Component, /* ChangeDetectionStrategy */ } from '@angular/core';
import { Path_Register } from 'src/app/app-routing.module';

@Component({
    selector: 'app-page-landing',
    templateUrl: './page-landing.component.html',
    styleUrls: ['./page-landing.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLandingComponent {
    Path_Register = Path_Register
    constructor(private http: HttpClient) {
        this.http.get('/api/sanctum/csrf-cookie').subscribe()

    }
}
