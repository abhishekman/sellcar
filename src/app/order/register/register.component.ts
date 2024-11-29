import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { WeatherService } from '../../Service/Weather/weather.service';
import { sha512 } from 'js-sha512';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent  {
userData = {
  username: '',
  password: '',
}

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private weatherService: WeatherService
  ) {}

    onSubmit() {
      // Hash the password before sending it to the server
      const hashedPassword = sha512(this.userData.password);
      const hashedUserData = {
        username: this.userData.username,
        password: hashedPassword,
      };
  
      this.weatherService.userregister(hashedUserData).subscribe(
        response => {
          console.log('Registration successful', response);
          this.toastr.success('Registration successful');
          this.router.navigate(['/order/home']); // Redirect to the login page or any other page
        },
        error => {
          console.error('Registration failed', error);
          this.toastr.error('Registration failed');
        }
      );
    }
  }