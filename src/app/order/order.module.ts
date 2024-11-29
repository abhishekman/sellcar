import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from './order-routing.module';
// import { AboutComponent } from './about/about.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UiUploadImageComponent } from './ui-upload-image/ui-upload-image.component';
//import { CarCheckComponent } from './car-check/car-check.component';
// import { AboutdialogComponent } from './aboutdialog/aboutdialog.component';


@NgModule({
  declarations: [
    // AboutComponent,
  
    // AboutdialogComponent
  
    // UiUploadImageComponent
  
   
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  
  ]
})
export class OrderModule { }
