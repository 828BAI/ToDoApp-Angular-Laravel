import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './component/page-login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageLoginComponent
  ],
  imports: [
    CommonModule,
    PageLoginRoutingModule,

    FormsModule
  ]
})
export class PageLoginModule { }
