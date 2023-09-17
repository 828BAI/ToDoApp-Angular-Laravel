import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRegisterComponent } from './component/page-register.component';

const routes: Routes = [{ path: '', component: PageRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRegisterRoutingModule { }
