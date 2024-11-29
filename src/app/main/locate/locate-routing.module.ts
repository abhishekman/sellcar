import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocateComponent } from './locate.component';
const routes: Routes = [
  {
    path:'',component:LocateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocateRoutingModule { }
