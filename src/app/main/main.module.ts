import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';

// import { CategoryComponent } from './category/category.component';
// import { MainLoginComponent } from './main-login/main-login.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MainRegisterComponent } from './main-register/main-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserIComponent } from './user-i/user-i.component';
import { ChatComponent } from './chat/chat.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { CarpaymentComponent } from './carpayment/carpayment.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { CarMirComponent } from './car-mir/car-mir.component';
import { UserSellerComponent } from './user-seller/user-seller.component';
import { LocateComponent } from './locate/locate.component';
@NgModule({
  declarations: [    
    // CategoryComponent,
    // MainLoginComponent  
  
    MainRegisterComponent, AdminLoginComponent, UserIComponent, ChatComponent, UserChatComponent, UserProfileComponent, UserSidebarComponent, UserFooterComponent, CarpaymentComponent, UserAddressComponent, CarMirComponent, UserSellerComponent, LocateComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgModule
  ]
})
export class MainModule { }
