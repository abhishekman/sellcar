import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Service/Weather/weather.service';
import { MatDialog } from '@angular/material/dialog';
import { CarCheckComponent } from '../car-check/car-check.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: any[] = []; // Array to hold car details

  constructor(private carService: WeatherService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // Fetch details for each car by its specific ID
    this.fetchCarDetails(41);
    this.fetchCarDetails(42);
    this.fetchCarDetails(43);
    this.fetchCarDetails(44); // Assuming you have a car with ID 44 as well
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

  openDialog(car: any, imageUrl: string): void {
    this.dialog.open(CarCheckComponent, {
      data: { ...car, image: imageUrl }
    });
  }
}
