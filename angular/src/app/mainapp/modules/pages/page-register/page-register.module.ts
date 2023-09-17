import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRegisterRoutingModule } from './page-register-routing.module';
import { PageRegisterComponent } from './component/page-register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        PageRegisterComponent
    ],
    imports: [
        CommonModule,
        PageRegisterRoutingModule,

        FormsModule
    ]
})
export class PageRegisterModule { }
