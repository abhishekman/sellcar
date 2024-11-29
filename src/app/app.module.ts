import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderLayoutComponent } from './layout/order-layout/order-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './order/home/home.component';
import { LoginComponent } from './order/login/login.component';
import { RegisterComponent } from './order/register/register.component';
import { WeatherService } from './Service/Weather/weather.service'; 
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http'; // Import HttpClientModule
import { AboutComponent } from './order/about/about.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutdialogComponent } from './order/aboutdialog/aboutdialog.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ToastrModule } from 'ngx-toastr';
import { CategoryComponent } from './main/category/category.component';
import { MainLoginComponent } from './main/main-login/main-login.component';
import { CommonModule, DatePipe } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
// for fusion charts
import { FusionChartsModule } from 'angular-fusioncharts'; 
import { MainRegisterComponent } from './main/main-register/main-register.component';
import { AdminLoginComponent } from './main/admin-login/admin-login.component';
import { ChatComponent } from './main/chat/chat.component';
import { UserChatComponent } from './main/user-chat/user-chat.component';
import { UserIComponent } from './main/user-i/user-i.component';
import { UiUploadImageComponent } from './order/ui-upload-image/ui-upload-image.component';
import { UserSidebarComponent } from './main/user-sidebar/user-sidebar.component';
//import { ChatService } from './Service/chat-service.service';
import { UserFooterComponent } from './main/user-footer/user-footer.component';
import { CarCheckComponent } from './order/car-check/car-check.component';
import { CarCartService } from './Service/car-cart.service';
import { UserProfileComponent } from './main/user-profile/user-profile.component';
import { CarpaymentComponent } from './main/carpayment/carpayment.component';
import { UserAddressComponent } from './main/user-address/user-address.component';
import { CarMirComponent } from './main/car-mir/car-mir.component';
import { UserSellerComponent } from './main/user-seller/user-seller.component';
import { LocateComponent } from './main/locate/locate.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutdialogComponent,
    AboutComponent,
    CategoryComponent,
    MainLoginComponent,
    MainRegisterComponent,
    AdminLoginComponent,
    ChatComponent,
    UserChatComponent,
    UserIComponent,
    UiUploadImageComponent,
    UserSidebarComponent,
    UserFooterComponent,
    CarCheckComponent,
    UserProfileComponent,
    CarpaymentComponent,
    UserAddressComponent,
    CarMirComponent,
    UserSellerComponent,
    LocateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule, // Include HttpClientModule in imports
    NgxSpinnerModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    NgxCaptchaModule,
    ToastrModule.forRoot(),
    FusionChartsModule,
    CommonModule,

  

  ],
  providers: [
    DatePipe,
    WeatherService,
    provideHttpClient(withFetch()),
    HttpClient,
    CarCartService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}



