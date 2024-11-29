import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRegisterRoutingModule } from './main-register-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../../Service/Weather/weather.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRegisterRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // provideClientHydration,
    WeatherService
  ],
})
export class MainRegisterModule { }
