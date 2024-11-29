import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../../Service/Weather/weather.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr'; 
import { sha512 } from 'js-sha512';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  siteKey: string = "6LcDdLYpAAAAAC-jBKFdHCeeBHvwI48g5L7AwSwY";
  loginForm!: FormGroup;
  usrname={
    name:'abhishek',
    lastname:"thakur"
  };
  
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

    this.service.logni(formreqt).subscribe(
      (loginResponse: any) => {
        if (loginResponse && loginResponse.token) {
          this.toastr.success('Login successful!');
          localStorage.setItem('token', loginResponse.token);
          this.router.navigate(['/main/user-i']);
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




// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { WeatherService } from '../../Service/Weather/weather.service';
// import { HttpClient } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr'; 
// import { sha512 } from 'js-sha512';
// import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   siteKey: string = "6LcDdLYpAAAAAC-jBKFdHCeeBHvwI48g5L7AwSwY";
//   loginForm!: FormGroup;
  
//   constructor(
//     private formBuilder: FormBuilder, 
//     private router: Router, 
//     private service: WeatherService, 
//     private http: HttpClient, 
//     private toastr: ToastrService,   
//     @Inject(LOCAL_STORAGE) private storageService: StorageService
//   ) {}

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//       recaptcha: ['', Validators.required]
//     });
  
//     const storedUsername = this.storageService.get('username');
//     const storedPassword = this.storageService.get('password');
//     if (storedUsername && storedPassword) {
//       this.loginForm.patchValue({
//         username: storedUsername,
//         password: storedPassword
//       });
//     }
//     window.onbeforeunload = () => {
//       this.storageService.clear();
//     };
//   }

//   handleLogin() {
//     if (this.loginForm.invalid) {
//       alert('Please fill all the required fields.');
//       return;
//     }

//     const username = this.loginForm.get('username')?.value;
//     const password = sha512(this.loginForm.get('password')?.value);
//     const recaptchaToken = this.loginForm.get('recaptcha')?.value;

//     const formData = {
//       "username": username,
//       "password": password,
//       "captchaToken": recaptchaToken
//     };

//     this.service.logni(formData).subscribe(
//       (loginResponse: any) => { // Change here to any type temporarily
//         if (typeof loginResponse === 'string') {
//           alert('Login successful!');
//           this.storageService.set('username', username);
//           this.storageService.set('password', password);
//           localStorage.setItem('token', loginResponse); // Assuming loginResponse is the token
//           this.router.navigate(['/order/register']);
//         } else {
//           alert('Invalid username or password.');
//         }
//       },
//       error => {
//         console.error('Error:', error);
//         alert('An error occurred while logging in. Please try again later.');
//       }
//     );
//   }
// }


