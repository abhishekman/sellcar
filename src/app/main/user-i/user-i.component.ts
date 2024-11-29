import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Service/Weather/weather.service';
import { CarCartService } from '../../Service/car-cart.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-i',
  templateUrl: './user-i.component.html',
  styleUrls: ['./user-i.component.css']
})
export class UserIComponent implements OnInit {

  cars: any[] = []; // Array to hold car details
  cartCount: number = 0;

  constructor(
    private carService: WeatherService,
    private carDataService: CarCartService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // Fetch details for each car by its specific ID
    const carIds = [41, 42, 43, 44, 45, 46, 47, 48];
    carIds.forEach(id => this.fetchCarDetails(id));

    this.cartCount = this.carDataService.getCount();
  }

  // Function to fetch details for a specific car by ID
  fetchCarDetails(id: number): void {
    this.carService.getCarById(id).subscribe(
      (carDetails) => {
        // Push fetched car details into 'cars' array
        this.cars.push(carDetails);
      },
      (error) => {
        console.error(`Error fetching details for car ID ${id}:`, error);
      }
    );
  }

  // Function to handle buying a car
  buyCar(car: any, imageUrl: string): void {
    this.carDataService.addCarDetail({ car: car, imageUrl: imageUrl });
    this.cartCount++;
    // Display a success message using MatSnackBar
    const message = 'Car added to cart. Go to cart for further information.';
    const action = 'Go to Cart';

    const snackBarRef = this._snackBar.open(message, action, {
      duration: 5000, // 5 seconds
    });

    // Handle the action button click
    snackBarRef.onAction().subscribe(() => {
      this.router.navigate(['/main/user-profile']); // Navigate to the cart or desired page
    });
  }

  // Function to handle selling a car
  sellCar(car: any): void {
    // Implement selling logic here (e.g., navigate to sell page or perform sell action)
    console.log('Selling car:', car);
  }
}
