import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLandingRoutingModule } from './page-landing-routing.module';
import { PageLandingComponent } from './component/page-landing.component';


@NgModule({
  declarations: [
    PageLandingComponent
  ],
  imports: [
    CommonModule,
    PageLandingRoutingModule
  ]
})
export class PageLandingModule { }
