import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../../Service/Weather/weather.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr'; 
import { sha512 } from 'js-sha512';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent implements OnInit {
  siteKey: string = "6LcDdLYpAAAAAC-jBKFdHCeeBHvwI48g5L7AwSwY";
  loginForm!: FormGroup;
  defaultProfileImage = '../../../assets/Screenshot (8).png'
  
  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private service: WeatherService, 
              private http: HttpClient, 
              private toastr: ToastrService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  handleLogin() {
    if (this.loginForm.invalid) {
      this.toastr.error('Please fill all the required fields.');
      return;
    }

    const username = this.loginForm.get('username')?.value;
    const password = sha512(this.loginForm.get('password')?.value);
    const recaptchaToken = this.loginForm.get('recaptcha')?.value;

    const formreqt = {
      "username": username,
      "password": password,
      "captchaToken": recaptchaToken
    };

    this.service.adminlogin(formreqt).subscribe(
      (loginResponse: any) => {
        if (loginResponse && loginResponse.token) {
          this.toastr.success('Login successful!');
          localStorage.setItem('token', loginResponse.token);

const profileImage =loginResponse.img_path ? loginResponse.img_path: this.defaultProfileImage;
localStorage.setItem('profileImage', profileImage)

          this.router.navigate(['/main/main-login']);
        } else {
          this.toastr.error('Invalid username or password.');
        }
      },
      (error) => {
        console.error('Error:', error);
        this.toastr.error('An error occurred while logging in. Please try again later.');
      }
    );
  }
}
