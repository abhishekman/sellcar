import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'main-login',
    loadChildren:()=>import('./main-login/main-login.module').then(m=>m.MainLoginModule)
  },
  {
    path:'category',
    loadChildren:()=>import('./category/category.module').then(m=>m.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
