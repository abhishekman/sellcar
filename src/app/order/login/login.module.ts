import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { WeatherService } from '../../Service/Weather/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http'; 
import { withFetch } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule ,
   
    
  ],
  providers: [
    provideHttpClient(withFetch()),
   WeatherService
    
    
  ]
})
export class LoginModule { }
