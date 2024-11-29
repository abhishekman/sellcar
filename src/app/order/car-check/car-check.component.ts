import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Router } from '@angular/router';
@Component({
  selector: 'app-car-check',
  templateUrl: './car-check.component.html',
  styleUrl: './car-check.component.css'
})
export class CarCheckComponent {


constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<CarCheckComponent>,
  private router: Router
) { }

buyNow(): void {
  // Close the dialog
  this.dialogRef.close();

  // Navigate to the buy page with the car ID
  this.router.navigate(['/order/login']);
}
}