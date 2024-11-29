import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { WeatherService } from '../../Service/Weather/weather.service';
import { sha512 } from 'js-sha512';

@Component({
  selector: 'app-main-register',
  templateUrl: './main-register.component.html',
  styleUrl: './main-register.component.css'
})
export class MainRegisterComponent {
  userData = {
    username: '',
    password: ''
  };

  constructor(private userService: WeatherService,  private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,) { }

    onSubmit() {
      // Hash the password before sending it to the server
      const hashedPassword = sha512(this.userData.password);
      const hashedUserData = {
        username: this.userData.username,
        password: hashedPassword,
      };
  
      this.userService.register(hashedUserData).subscribe(
        response => {
          console.log('Registration successful', response);
          this.toastr.success('Registration successful');
          this.router.navigate(['/login']); // Redirect to the login page or any other page
        },
        error => {
          console.error('Registration failed', error);
          this.toastr.error('Registration failed');
        }
      );
    }
  }