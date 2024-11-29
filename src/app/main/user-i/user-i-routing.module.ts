import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserIComponent } from './user-i.component';

const routes: Routes = [
  {path:'', component:UserIComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserIRoutingModule { }
