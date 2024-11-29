import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { OrderLayoutComponent } from './layout/order-layout/order-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { CarpaymentModule } from './main/carpayment/carpayment.module';
import { UserAddressModule } from './main/user-address/user-address.module';
import { CarMirModule } from './main/car-mir/car-mir.module';
import { UserSellerModule } from './main/user-seller/user-seller.module';
import { LocateModule } from './main/locate/locate.module';

const routes: Routes = [
  { path: '', redirectTo: '/order/home', pathMatch: 'full' },
  {
    path: 'order',
    component: OrderLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./order/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./order/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./order/register/register.module').then(m => m.RegisterModule)
      },
      {
        path:'about',
        loadChildren: () => import('./order/about/about.module').then(m => m.AboutModule)
      },
      {
        path:'ui-upload-image',
        loadChildren: () => import('./order/ui-upload-image/ui-upload-image-routing.module').then(m => m.UiUploadImageRoutingModule)
      }
     

    ]
  },
  {
    path: 'main',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'main-login', // Corrected path here
        loadChildren: () => import('./main/main-login/main-login.module').then(m => m.MainLoginModule)
      },
      {
      path:'category',
      loadChildren:() =>import('./main/category/category.module').then(m=>m.CategoryModule)
      },
      {
        path:'main-register',
        loadChildren:() =>import('./main/main-register/main-register.module').then(m=>m.MainRegisterModule)
      },
      {
        path:'admin-login',
        loadChildren:() =>import('./main/admin-login/admin-login-routing.module').then(m=>m.AdminLoginRoutingModule)
      },
      {path:'user-i',
        loadChildren:() =>import('./main/user-i/user-i-routing.module').then(m=>m.UserIRoutingModule)
      },
      {path:'chat',
        loadChildren:() =>import('./main/chat/chat-routing.module').then(m=>m.ChatRoutingModule)
      },
      {path:'user-chat',
        loadChildren:() =>import('./main/user-chat/user-chat-routing.module').then(m=>m.UserChatRoutingModule)
      },
      {
        path:'user-profile',
        loadChildren: () => import('./main/user-profile/user-profile-routing.module').then(m => m.UserProfileRoutingModule)
      },
      {
        path:'carpayment',
        loadChildren:()=> import('./main/carpayment/carpayment-routing.module').then(m=>CarpaymentModule)
      },
      {
        path:'user-address',
        loadChildren:()=> import('./main/user-address/user-address-routing.module').then(m=>UserAddressModule)
      },
      {
        path:'car-mir',
        loadChildren:()=> import('./main/car-mir/car-mir-routing.module').then(m=>CarMirModule)
      },
      {
        path:'user-seller',
        loadChildren:()=>import('./main/user-seller/user-seller-routing.module').then(m=>UserSellerModule)
      },
      {
        path:'locate',
        loadChildren:()=>import('./main/locate/locate-routing.module').then(m=>LocateModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
