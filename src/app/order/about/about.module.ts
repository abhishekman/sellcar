import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { WeatherService } from '../../Service/Weather/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http'; 
import { withFetch } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    MatFormField,
    HttpClientModule,
    MatDialogModule,
    MatButton,
    MatInputModule,
    // BrowserAnimationsModule,
   
  ],
  providers: [
    
    provideHttpClient(withFetch()),
    WeatherService
    
  ],
})
export class AboutModule { }
