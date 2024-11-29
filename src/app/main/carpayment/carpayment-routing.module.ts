import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpaymentComponent } from './carpayment.component';
const routes: Routes = [
  {path:'',component:CarpaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarpaymentRoutingModule { }
