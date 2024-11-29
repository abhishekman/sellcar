import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeatherService } from '../../Service/Weather/weather.service';
import { CarCartService } from '../../Service/car-cart.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  buyer = {
    name: '',
    contactInfo: '',
    address: '',
    model: ''
  };

  carModelName: string = '';

  constructor(
    private dialogRef: MatDialogRef<UserAddressComponent>,
    private weatherService: WeatherService,
    private carCartService: CarCartService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.carModelName = data.carModelName;
  }

  ngOnInit(): void {
    // Assuming the car details are already added to the cart, retrieve the model name
    const carDetails = this.carCartService.getCarDetails();
    if (carDetails.length > 0) {
      this.carModelName = carDetails[0].car.modelName; // Adjust based on your actual data structure
      this.buyer.model = this.carModelName; // Set the model in the buyer object
    }
  }

  saveAddress() {
    this.weatherService.buyerinfo(this.buyer).subscribe(response => {
      if (response.message === 'Buyer information added successfully.') {
        alert('Address saved successfully');
        this.dialogRef.close(this.buyer);
      } else {
        alert('Failed to save address');
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  buyNow() {
    // You can perform any additional actions here when the "Buy Now" button is clicked
    alert(`Buying car model: ${this.carModelName}`);
    this.dialogRef.close();
  }
}
