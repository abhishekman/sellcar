import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { provideClientHydration } from '@angular/platform-browser';

import { RegisterRoutingModule } from './register-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../../Service/Weather/weather.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    HttpClientModule 
  ],
  providers: [
    // provideClientHydration,
    WeatherService
  ],
})
export class RegisterModule { }
