import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutdialogComponent } from '../aboutdialog/aboutdialog.component';
import { WeatherService } from '../../Service/Weather/weather.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  modalRef!: BsModalRef;
  form!: FormGroup;
  cars: any[] = [];

  constructor(
    public dialog: MatDialog,
    private weatherService: WeatherService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getCarsData();
  }

  createForm() {
    this.form = this.formBuilder.group({
      itemName: ['', Validators.required],
      quantity: ['', Validators.required]
      // Define other form controls here
    });
  }

  openModal() {
    this.modalRef = this.modalService.show('exampleModal');
  }

  saveItem() {
    if (this.form.valid) {
      // Save the item data (this.form.value) here
      console.log('Form submitted:', this.form.value);

      // Close the modal and provide feedback to the user
      this.modalRef.hide();
      alert('Item saved successfully!');
    } else {
      // Mark all fields as touched to show errors
      this.form.markAllAsTouched();
    }
  }

  getCarsData(): void {
    this.weatherService.getAll()
      .subscribe(data => {
        this.cars = data; // Assign the retrieved data to the cars property
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AboutdialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  closeModal() {
    // Implement closeModal if needed
  }
}
