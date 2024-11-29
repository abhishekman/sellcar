import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRegisterComponent } from './main-register.component';

const routes: Routes = [
  {path:'',component:MainRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRegisterRoutingModule { }
