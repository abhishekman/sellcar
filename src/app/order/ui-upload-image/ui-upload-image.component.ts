import { Component,Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../Service/Weather/weather.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ui-upload-image',
  templateUrl: './ui-upload-image.component.html',
  styleUrls: ['./ui-upload-image.component.css']
})
export class UiUploadImageComponent implements OnInit {
  username: string = '';
  profileImageSrc: string = 'C:\assets\Screenshot (8).png'; // Default image source

  constructor(
    private router: Router,
    private weatherService: WeatherService,
    @Inject(PLATFORM_ID) private platformId: object // Inject PLATFORM_ID
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) { // Check if running in the browser
      const username = localStorage.getItem('username');
      if (!username) {
        this.router.navigate(['/login']);
      } else {
        this.username = username;
        this.weatherService.getUserProfileImagePaths(this.username).subscribe(paths => {
          if (paths.length > 0) {
            this.profileImageSrc = paths[0]; // Assume the first image is the profile picture
          }
        });
      }
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImageSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onUpload() {
    if (this.username && this.profileImageSrc) {
      // Upload image
      this.weatherService.uploadUserProfileImage(this.username, this.profileImageSrc).subscribe(response => {
        if (response.success) {
          alert('Profile picture uploaded successfully');
        } else {
          alert('Failed to upload profile picture');
        }
      });
    }
  }
}