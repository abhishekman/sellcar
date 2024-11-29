import { Component, OnInit } from '@angular/core';
import { CarCartService } from '../../Service/car-cart.service';
import { Router } from '@angular/router';
import { UserAddressComponent } from '../user-address/user-address.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  carDetails: { car: any, imageUrl: string }[] = [];
  isAddressProvided: boolean = false; // New variable to track address provision

  constructor(
    private carCartService: CarCartService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.carDetails = this.carCartService.getCarDetails();
    console.log('Car details loaded:', this.carDetails);
  }

  payNow(detail: { car: any, imageUrl: string }) {
    if (this.isAddressProvided) {
      this.carCartService.setCarDetails(detail);
      this.router.navigate(['/main/carpayment']);
    } else {
      alert('Please provide an address before proceeding to payment.');
    }
  }

  payTotalPrice() {
    if (this.isAddressProvided) {
      const totalPrice = this.calculateTotalPrice();
      console.log('Total price to pay:', totalPrice);
      this.router.navigate(['/main/carpayment'], { queryParams: { totalPrice } });
    } else {
      alert('Please provide an address before proceeding to payment.');
    }
  }

  clearCars() {
    this.carCartService.clearCarDetails();
    this.carDetails = [];
  }

  calculateTotalPrice(): number {
    return this.carDetails.reduce((total, detail) => total + detail.car.price, 0);
  }

  openAddressDialog(): void {
    const dialogRef = this.dialog.open(UserAddressComponent, {
      width: '300px',
      data: { carModelName: this.carDetails.length > 0 ? this.carDetails[0].car.modelName : '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Address details:', result);
        this.isAddressProvided = true; // Set to true when address is provided
      }
    });
  }

  //Rental Button
  
}
