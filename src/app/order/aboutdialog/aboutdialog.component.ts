import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../Service/Weather/weather.service';

@Component({
  selector: 'app-aboutdialog',
  templateUrl: './aboutdialog.component.html',
  styleUrls: ['./aboutdialog.component.css']
})
export class AboutdialogComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AboutdialogComponent>,
    private apiService: WeatherService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      color: ['', Validators.required],
      fuel: ['', Validators.required],
      transmission: ['', Validators.required],
      mileage: ['', Validators.required],
      price: ['', Validators.required],
      availability: ['', Validators.required],
      createdAt: ['', Validators.required],
      updatedAt: ['', Validators.required] // Corrected property name to 'updatedAt'
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    if (this.form.valid) {
      this.apiService.addData(this.form.value).subscribe(
        (response) => {
          console.log('Data added successfully:', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error adding data:', error);
          // Handle error if needed
        }
      );
    }
  }
}
