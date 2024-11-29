import { Component } from '@angular/core';
import { WeatherService } from '../../Service/Weather/weather.service';

@Component({
  selector: 'app-user-seller',
  templateUrl: './user-seller.component.html',
  styleUrls: ['./user-seller.component.css']
})
export class UserSellerComponent {
  carName: string = '';
  selectedImage: string | ArrayBuffer = '';
  years: number[] = [];
  year: number = new Date().getFullYear();
  transmission: string = '';
  make: string = '';
  model: string = '';
  color: string = '';
  engineType: string = '';
  mileage: number = 0;
  car_img: string = '';
  price: number = 0;
  submissionSuccess: boolean = false;

  constructor(private weatherService: WeatherService) {
    const currentYear = new Date().getFullYear();
    for (let year = 2000; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.selectedImage = reader.result;
          this.car_img = reader.result as string; // Store the base64 string directly
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(): void {
    const formData = {
      Make: this.make,
      Model: this.model,
      Year: this.year,
      Color: this.color,
      EngineType: this.engineType,
      TransmissionType: this.transmission,
      Mileage: this.mileage,
      car_img: this.car_img,
      Price: this.price
    };

    console.log('Form Data:', formData); // Log form data before sending

    this.weatherService.addData(formData).subscribe(
      response => {
        console.log('Car data submitted:', response);
        this.submissionSuccess = true;
      },
      error => {
        console.error('Error occurred while submitting car data:', error);
        this.submissionSuccess = false;
      }
    );
  }
}
