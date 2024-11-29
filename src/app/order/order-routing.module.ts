import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',
  loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
},
  {
    path:'login',
    loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
  },
  {path:'register',
  loadChildren:()=>import('./register/register.module').then(m=>m.RegisterModule)
},
{path:'about',
loadChildren:()=>import('./about/about.module').then(m=>m.AboutModule)
},
{path:'ui-upload-image',
  loadChildren:()=>import('./ui-upload-image/ui-upload-image-routing.module').then(m=>m.UiUploadImageRoutingModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
